import React from 'react';
import { Platform, Text, View } from 'react-native';
import fetch from 'react-native-fetch-polyfill';

const host = Platform.select({
  android: '10.0.2.2',
  ios: 'localhost',
});

const port = '3000';

export default class App extends React.Component {
  componentWillMount() {
    const url = `http://${host}:${port}/test`;
    fetch(url);
  }

  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}
