import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, ActivityIndicator} from 'react-native';
import {testIDs} from '../test-ids';
import {useAppSelector} from '../hooks/hooks';
import {fetchCharacterInfo, loadCharacter} from '../actions/actions';
import {useDispatch} from 'react-redux';

export interface CharacterInfoProps {
  componentId: string;
  characterID: string;
}

export const CharacterInfo = ({characterID}: CharacterInfoProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacterInfo(characterID));
    return () => {
      dispatch(loadCharacter(undefined));
    };
  }, [dispatch, characterID]);

  const character = useAppSelector(state => state.characterReducer.character);
  const loading = useAppSelector(state => state.loadingReducer.loading);

  if (character) {
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
  }
  if (loading) {
    return (
      <View style={styles.loadingView}>
        <View style={styles.loadingPadding}>
          <ActivityIndicator animating={true} color={'black'} size="large" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AAAAAF',
  },
  loadingPadding: {
    padding: 13,
    borderRadius: 13,
  },
  loadingText: {color: 'black'},
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
