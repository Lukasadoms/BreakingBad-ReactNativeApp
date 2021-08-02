import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {screenIDs} from '../screen-ids';
import {Character} from '../reducers/charactersReducer';
import {navigationService} from '../services/NavigationService';
import {testIDs} from '../test-ids';
import {useAppSelector} from '../hooks/hooks';
import {fetchCharacters} from '../actions/actions';
import {useDispatch} from 'react-redux';

export interface CharacterListProps {
  componentId: string;
}

interface CharacterListItemProps {
  item: Character;
  onPress: (characterId: string) => void;
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

  let characters = useAppSelector(
    state => state.characterReducer.characterList,
  );

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const renderItem = ({item}: ListRenderItemInfo<Character>) => {
    return <CharacterListItem onPress={pushViewCharacterScreen} item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Character List</Text>
      <FlatList
        data={characters}
        keyExtractor={extractKey}
        renderItem={renderItem}
        testID={testIDs.CHARACTER_LIST}
      />
    </View>
  );
});

const CharacterListItem = React.memo((props: CharacterListItemProps) => {
  const onPress = useCallback(() => props.onPress(props.item.char_id), [props]);
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <Image style={styles.image} source={{uri: props.item.img}} />
      <Text
        style={styles.name}
        testID={testIDs.CHARACTER_NAME(props.item.char_id)}>
        {props.item.name}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
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
