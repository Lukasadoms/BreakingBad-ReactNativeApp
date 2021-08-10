import {Card, View} from 'react-native-ui-lib';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {fetchCharacters} from '../actions/actions';
import {useAppSelector} from '../hooks/hooks';
import {useDispatch} from 'react-redux';

export const BreakingBadAppWidget = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const characters = useAppSelector(state =>
    state.characterReducer.characterList.slice(0, 3),
  );

  return (
    <View row={true} style={styles.container}>
      <Card style={styles.card}>
        <Card.Section
          imageSource={{uri: characters[0].img}}
          imageStyle={styles.image}
        />
      </Card>
      <Card style={styles.card}>
        <Card.Section
          imageSource={{uri: characters[1].img}}
          imageStyle={styles.image}
        />
      </Card>
      <Card style={styles.card}>
        <Card.Section
          imageSource={{uri: characters[2].img}}
          imageStyle={styles.image}
        />
      </Card>
    </View>
  );
};

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
    height: 200,
    width: 100,
    borderRadius: 10,
  },
  card: {
    margin: 10,
    resizeMode: 'contain',
  },
  container: {
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
});
