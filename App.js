import React from 'react';
import { Text, View } from 'react-native';
import fetch from 'react-native-fetch-polyfill';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { agent: '-' };
  }

  async componentWillMount() {
    try {
      const res = await fetch('https://syoto-test.herokuapp.com/test');
      console.log(res);
      const { agent } = await res.json();
      this.setState({ agent });
    } catch (e) {
      this.setState({ agent: 'ERROR' });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>{this.state.agent}</Text>
      </View>
    );
  }
}
