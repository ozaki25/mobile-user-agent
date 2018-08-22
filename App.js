import React from 'react';
import { Button, Linking, Text, View } from 'react-native';
import fetch from 'react-native-fetch-polyfill';

const url = 'https://syoto-test.herokuapp.com/test';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { agent: '-' };
  }

  getUserAgent = async () => {
    try {
      const res = await fetch(url);
      console.log(res);
      const { agent } = await res.json();
      this.setState({ agent });
    } catch (e) {
      this.setState({ agent: 'ERROR' });
    }
  };

  openBrowser = () => Linking.openURL(url);

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>{this.state.agent}</Text>
        <Button title="UserAgentを取得" onPress={this.getUserAgent} />
        <Button title="ブラウザで開く" onPress={this.openBrowser} />
      </View>
    );
  }
}
