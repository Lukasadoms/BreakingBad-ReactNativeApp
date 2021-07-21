import React from 'react';
import {View, StyleSheet, Button, Alert, Text} from 'react-native';
import {testIDs} from '../test-ids';

export const showAlert = () => {
  Alert.alert('Alert Title', 'This is a test', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
  return 5;
};

export const CharacterInfo = () => {
  return (
    <View style={styles.container}>
      <Text>Character Info</Text>
      <Button
        color="#f194ff"
        title={'Alert'}
        onPress={showAlert}
        testID={testIDs.BUTTON_TITLE}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D3EDEF',
  },
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
