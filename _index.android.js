/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid
} from 'react-native';

import { Sentry } from 'react-native-sentry';

// Sentry.config('https://3c29a7e685944426b5654e7ee473e6da@sentry.io/1259823').install();


export default class rnGo47 extends Component {
  _catchErrorStack() {
    try {
      var v1 = '----v1----------v1---------v1-----'; var v2 = '----v2----------v2---------v2-----' + v1; var v3 = '----v3----------v3---------v3-----' + v2; var v4 = '----v4----------v4---------v4-----' + v3; var v5 = '----v5----------v5---------v5-----' + v4; var v6 = '----v6----------v6---------v6-----' + v5; var v7 = '----v7----------v7---------v7-----' + v6; var v8 = '----v8----------v8---------v8-----' + v7; var v9 = '----v9----------v9---------v9-----' + v8; var v10 = '----v10----------v10---------v10-----' + v9; var e = new Error('catch-error');  var v11 = '----v11----------v11---------v11-----' + v10; var v12 = '----v12----------v12---------v12-----' + v11; var v13 = '----v13----------v13---------v13-----' + v12; var v14 = '----v14----------v14---------v14-----' + v13; var v15 = '----v15----------v15---------v15-----' + v14; var v16 = '----v16----------v16---------v16-----' + v15; var v17 = '----v17----------v17---------v17-----' + v16; var v18 = '----v18----------v18---------v18-----' + v17; console.log(v18); throw e;
    } catch (e) {
      console.log('-------catch-error-stack------', e.stack);
      ToastAndroid.show(e.stack.split('\n')[0], ToastAndroid.LONG, ToastAndroid.CENTER)
      throw e
    }
  }
  _throwErrorStack() {
    try {
      throw new Error('throw-error')
    } catch (e) {
      console.log('-------throw-error-stack------', e.stack);
      ToastAndroid.show(e.stack.split('\n')[0], ToastAndroid.LONG, ToastAndroid.CENTER)
      throw e
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!fasfwefew
        </Text>
        <Button title="_catchErrorStack" onPress={ this._catchErrorStack }></Button>
        <Text style={{ height: 20 }}/>
        <Button title="_throwErrorStack" onPress={ this._throwErrorStack }></Button>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnGo47', () => rnGo47);
