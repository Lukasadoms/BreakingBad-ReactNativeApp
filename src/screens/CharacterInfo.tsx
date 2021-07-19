import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CharacterInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} testID="character-info">
        Character Info
      </Text>
    </View>
  );
};

export default CharacterInfo;

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
