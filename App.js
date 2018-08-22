import React from 'react';
import { Text, View } from 'react-native';
import fetch from 'react-native-fetch-polyfill';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { agent: '-' };
  }

  async componentWillMount() {
    const res = await fetch('https://syoto-test.herokuapp.com/test');
    this.setState({ gent: await res.toJson() });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Welcome to React Native!</Text>
        <Text style={{ fontSize: 24 }}>{this.state.agent}</Text>
      </View>
    );
  }
}
