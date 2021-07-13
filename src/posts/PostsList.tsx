import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class PostsList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is a test</Text>
      </View>
    );
  }
}

export default PostsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D3EDFF',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});
