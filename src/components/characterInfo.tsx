import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, ActivityIndicator} from 'react-native';
import {testIDs} from '../test-ids';
import {api} from '../api/api';
import {IS_LOADING} from '../actions/types';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {Character} from '../reducers/characterReducer';

export interface CharacterInfoProps {
  componentId: string;
  characterID: string;
}

export const CharacterInfo = (props: CharacterInfoProps) => {
  const [character, setCharacter] = useState<Character>({
    char_id: '',
    name: '',
    status: '',
    img: '',
    portrayed: '',
    birthday: '',
    nickname: '',
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({type: IS_LOADING, payload: true});
    api
      .fetchCharacter(props.characterID)
      .then(data => setCharacter(data[0]))
      .then(() => dispatch({type: IS_LOADING, payload: false}));
  }, [dispatch, props.characterID]);

  const loading = useAppSelector(state => state.loadingReducer.loading);

  if (!loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text} testID={testIDs.CHARACTER_TITLE}>
          {character.name}
        </Text>
        <Image
          style={styles.image}
          source={{uri: character.img}}
          testID={testIDs.CHARACTER_IMAGE}
        />
        <Text style={styles.text}>Status: {character.status}</Text>
        <Text style={styles.text}>Nickname: {character.nickname}</Text>
        <Text style={styles.text}>Birthday: {character.birthday}</Text>
        <Text style={styles.text}>Actor: {character.portrayed}</Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#AAAAAF',
        }}>
        <View
          style={{
            padding: 13,
            borderRadius: 13,
          }}>
          <ActivityIndicator animating={true} color={'black'} size="large" />
          <Text style={{color: 'black'}}>Loading...</Text>
        </View>
      </View>
    );
  }
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
