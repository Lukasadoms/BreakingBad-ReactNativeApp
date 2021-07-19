import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {screenIDs} from '../screen-ids';

export const characterList = (props: any) => {
  const pushViewCharacterScreen = () => {
    Navigation.push(props.componentId, {
      component: {
        name: screenIDs.CHARACTER_INFO,
        passProps: {
          somePropToPass: 'Some props that we are passing',
        },
        options: {
          topBar: {
            title: {
              text: 'Character1',
            },
          },
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={pushViewCharacterScreen} testID="character-list">
        Character List
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
    backgroundColor: '#D3EDFF',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});
