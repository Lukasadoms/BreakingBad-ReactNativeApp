import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
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
      console.log('before search', searchtext);
      dispatch(searchCharacters(searchtext));
      console.log('search', searchtext);
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
  console.log(characters, 'from characterlist');

  const favouriteCharacterIds = useAppSelector(
    state => state.characterReducer.favouriteIds,
  );

  const renderItem = ({item}: ListRenderItemInfo<Character>) => {
    return (
      <CharacterListItem
        onPress={pushViewCharacterScreen}
        item={item}
        liked={favouriteCharacterIds.includes(item.char_id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Character List</Text>
      <FlatList
        ListHeaderComponent={
          <TextInput
            placeholder={'Search'}
            testID={testIDs.SEARCH_FIELD}
            onChangeText={onSearchTextInput}
          />
        }
        data={characters}
        keyExtractor={extractKey}
        renderItem={renderItem}
        testID={testIDs.CHARACTER_LIST}
      />
    </View>
  );
});

const CharacterListItem = React.memo(
  ({item, onPress, liked}: CharacterListItemProps) => {
    const onPressed = useCallback(
      () => onPress(item.char_id),
      [item.char_id, onPress],
    );

    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={onPressed}
        testID={testIDs.CHARACTER_ITEM}>
        <Image style={styles.image} source={{uri: item.img}} />
        <Text style={styles.name} testID={testIDs.CHARACTER_NAME(item.char_id)}>
          {item.name}
        </Text>
        <Image
          source={require('../../assets/heart.png')}
          style={liked ? styles.heartIconRed : styles.heartIcon}
        />
      </TouchableOpacity>
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
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#AAAAAF',
    paddingBottom: 62,
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    paddingBottom: 15,
  },
  listItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 5,
  },
  name: {fontSize: 28, paddingLeft: 15, alignSelf: 'center'},
});
