import React, {useCallback, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Image, Text, View, Button, LoaderScreen} from 'react-native-ui-lib';
import {testIDs} from '../test-ids';
import {useAppSelector} from '../hooks/hooks';
import {
  fetchCharacterInfo,
  loadCharacter,
  toggleFavourite,
} from '../actions/actions';
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

  const onFavouritePressed = useCallback(() => {
    dispatch(toggleFavourite(characterID));
  }, [dispatch, characterID]);

  const isFavourite = useAppSelector(state => {
    return state.characterReducer.favouriteIds.includes(characterID);
  });

  const character = useAppSelector(state => state.characterReducer.character);
  const doneLoading = useAppSelector(state => !state.loadingReducer.loading);

  if (doneLoading && character) {
    return (
      <View flex>
        <Text
          text50L
          center
          marginB-10
          marginT-10
          testID={testIDs.CHARACTER_TITLE}>
          {character.name}
        </Text>
        <Image
          style={styles.image}
          source={{uri: character.img}}
          testID={testIDs.CHARACTER_IMAGE}
        />
        <Text text40L center marginT-10>
          Status: {character.status}
        </Text>
        <Text text40L center marginT-10>
          Nickname: {character.nickname}
        </Text>
        <Text text40L center marginT-10>
          Birthday: {character.birthday}
        </Text>
        <Text text40L center marginT-10>
          Actor: {character.portrayed}
        </Text>
        <View marginT-10>
          <Button
            label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
            onPress={onFavouritePressed}
            bg-dark70
            size={Button.sizes.large}
            labelStyle={styles.label}
            style={styles.button}
            testID={testIDs.FAVOURITE_BUTTON}
          />
        </View>
      </View>
    );
  } else {
    return <LoaderScreen message="Loading..." />;
  }
};

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 60,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  label: {
    color: 'black',
  },
});
