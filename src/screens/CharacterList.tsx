import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

const CharacterList = (props: any) => {
  const pushViewCharacterScreen = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'CharacterInfo',
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

export default CharacterList;

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
