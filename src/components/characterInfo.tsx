import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {testIDs} from '../test-ids';
import {useDispatch, useSelector} from 'react-redux';
import {Character, CharacterState} from '../reducers/characterReducer';
import {api} from '../api/api';
import {LOAD_ITEMS} from '../actions/types';

export interface CharacterInfoProps {
  componentID: string;
  characterID: string;
}

export const CharacterInfo = (props: CharacterInfoProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(isloading true)
    api
      .fetchChactacters()
      .then(data => dispatch({type: LOAD_ITEMS, payload: data}));

    //.then(() => dispatch(isloading false)
  }, [dispatch]);

  const characters = useSelector<CharacterState, Character[]>(state =>
    state.characterList.filter(char => char.char_id === props.characterID),
  );

  const character = characters[0];

  return (
    <View style={styles.container}>
      <Text style={styles.text} testID={testIDs.CHARACTER_TITLE}>
        {character.name}
      </Text>
      <Image style={styles.image} source={{uri: character.img}} />
      <Text style={styles.text}>Status: {character.status}</Text>
      <Text style={styles.text}>Nickname: {character.nickname}</Text>
      <Text style={styles.text}>Birthday: {character.birthday}</Text>
      <Text style={styles.text}>Actor: {character.portrayed}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
    backgroundColor: '#AAAAAF',
  },
  text: {
    fontSize: 28,
    alignSelf: 'flex-start',
    margin: 10,
  },
});
