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
import {api} from '../api/api';
import {useDispatch, useSelector} from 'react-redux';
import {LOAD_ITEMS} from '../actions/types';
import {Character} from '../reducers/characterReducer';
import {navigationService} from '../services/NavigationService';
import {testIDs} from '../test-ids';
import {RootState} from '../store';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';

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

  const dispatch = useAppDispatch();

  const characters = useAppSelector(
    state => state.characterReducer.characterList,
  );

  useEffect(() => {
    api
      .fetchAllChactacters()
      .then(data => dispatch({type: LOAD_ITEMS, payload: data}));
  }, [dispatch]);

  const renderItem = (
    characterListRenderItemInfo: ListRenderItemInfo<Character>,
  ) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() =>
          pushViewCharacterScreen(characterListRenderItemInfo.item.char_id)
        }>
        <Image
          style={styles.image}
          source={{uri: characterListRenderItemInfo.item.img}}
        />
        <Text style={styles.name} testID={testIDs.CHARACTER_NAME}>
          {characterListRenderItemInfo.item.name}
        </Text>
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
        testID={testIDs.CHARACTER_LIST}
      />
    </View>
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
