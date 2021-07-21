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
import {testIDs} from '../test-ids';
import {api} from '../api/api';
import {useDispatch, useSelector} from 'react-redux';
import {LOAD_ITEMS} from '../actions/types';
import {Character, CharacterState} from '../reducers/characterReducer';
import {navigationService} from '../services/NavigationService';

export interface CharacterListProps {
  componentId: string;
}

export const CharacterList = React.memo((props: CharacterListProps) => {
  const pushViewCharacterScreen = useCallback(
    (characterID: string) => {
      navigationService.navigateTo(
        props.componentId,
        screenIDs.CHARACTER_INFO,
        characterID,
      );
    },
    [props.componentId],
  );

  const dispatch = useDispatch();

  const characters = useSelector<CharacterState, Character[]>(
    state => state.characterList,
  );

  useEffect(() => {
    api
      .fetchChactacters()
      .then(data => dispatch({type: LOAD_ITEMS, payload: data}));
  }, [dispatch]);

  const renderItem = (info: ListRenderItemInfo<Character>) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => pushViewCharacterScreen(info.item.char_id)}>
        <Image style={styles.logo} source={{uri: info.item.img}} />
        <Text style={styles.name}>{info.item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Character List</Text>
      <FlatList
        data={characters}
        keyExtractor={item => item.char_id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 60,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#D3EDFF',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 5,
  },
  name: {fontSize: 28, paddingLeft: 15, alignSelf: 'center'},
});
