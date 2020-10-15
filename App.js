/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Config from "react-native-config";

import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{padding: 20}}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <FastImage
            style={{height: 100, width: 100}}
            source={{uri: 'https://dummyimage.com/600x400/000/fff'}}
          />
          <FastImage
            style={{height: 100, width: 100}}
            source={{uri: 'https://loremflickr.com/320/240'}}
          />
          <FastImage
            style={{height: 100, width: 100}}
            source={{uri: 'https://loremflickr.com/320/240'}}
          />
          <Text>This should contain Hello World: "{Config.FOO}"</Text>
          <Icon.Button name="facebook" backgroundColor="#3b5998">
            <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
              Login with Facebook
            </Text>
          </Icon.Button>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
