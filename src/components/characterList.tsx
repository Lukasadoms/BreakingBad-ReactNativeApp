import React, {useCallback, useEffect} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {
  Image,
  Text,
  View,
  TextField,
  ListItem,
  LoaderScreen,
} from 'react-native-ui-lib';
import {screenIDs} from '../screen-ids';
import {Character} from '../reducers/charactersReducer';
import {navigationService} from '../services/NavigationService';
import {testIDs} from '../test-ids';
import {useAppSelector} from '../hooks/hooks';
import {
  fetchCharacters,
  fetchFavouriteCharactersIds,
  searchCharacters,
} from '../actions/actions';
import {useDispatch} from 'react-redux';
import CharacterInfo from './characterInfo';

export interface CharacterListProps {
  componentId: string;
}

interface CharacterListItemProps {
  item: Character;
  onPress: (characterId: string) => void;
  liked: boolean;
}

export const CharacterList = React.memo((props: CharacterListProps) => {
  const extractKey = useCallback(item => item.char_id.toString(), []);

  const pushViewCharacterScreen = useCallback(
    (characterID: string) => {
      navigationService.navigateToCharacterInfoScreen(
        props.componentId,
        screenIDs.CHARACTER_INFO,
        characterID,
      );
    },
    [props.componentId],
  );

  const dispatch = useDispatch();

  const onSearchTextInput = useCallback(
    searchtext => {
      dispatch(searchCharacters(searchtext));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchCharacters());
    dispatch(fetchFavouriteCharactersIds());
  }, [dispatch]);

  const characters = useAppSelector(
    state => state.characterReducer.characterList,
  );

  const favouriteCharacterIds = useAppSelector(
    state => state.characterReducer.favouriteIds,
  );

  const doneLoading = useAppSelector(state => !state.loadingReducer.loading);

  const renderItem = ({item}: ListRenderItemInfo<Character>) => {
    return (
      <CharacterListItem
        onPress={pushViewCharacterScreen}
        item={item}
        liked={favouriteCharacterIds.includes(item.char_id)}
      />
    );
  };

  if (doneLoading) {
    return (
      <View flex useSafeArea>
        <Text text50L center marginB-10 marginT-10>
          Character List
        </Text>
        <FlatList
          ListHeaderComponent={
            <TextField
              placeholder={'Search'}
              testID={testIDs.SEARCH_FIELD}
              onChangeText={onSearchTextInput}
              underlineColor={'black'}
            />
          }
          data={characters}
          keyExtractor={extractKey}
          renderItem={renderItem}
          testID={testIDs.CHARACTER_LIST}
        />
      </View>
    );
  } else {
    return <LoaderScreen message="Loading..." />;
  }
});

const CharacterListItem = React.memo(
  ({item, onPress, liked}: CharacterListItemProps) => {
    const onPressed = useCallback(
      () => onPress(item.char_id),
      [item.char_id, onPress],
    );

    return (
      <View testID={testIDs.CHARACTER_ITEM}>
        <ListItem
          testID={testIDs.CHARACTER_NAME(item.char_id)}
          flex
          marginB-2
          padding-10
          height={60}
          onPress={onPressed}>
          <ListItem.Part left>
            <Image style={styles.image} source={{uri: item.img}} />
          </ListItem.Part>
          <ListItem.Part middle marginL-20 marginR-30>
            <Text text50L>{item.name}</Text>
          </ListItem.Part>
          <ListItem.Part right marginL-20 marginR-30>
            <Image
              source={require('../../assets/heart.png')}
              style={liked ? styles.heartIconRed : styles.heartIcon}
            />
          </ListItem.Part>
        </ListItem>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  heartIconRed: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
    paddingLeft: 50,
    tintColor: 'red',
  },
  heartIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    paddingLeft: 50,
  },
  image: {
    width: 50,
    height: 60,
    resizeMode: 'contain',
  },
});

export default CharacterList;
