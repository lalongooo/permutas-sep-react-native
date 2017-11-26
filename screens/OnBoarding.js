import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
  TextInput
} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class Intro extends React.Component {

  render() {
    const nav = this.props.navigation;
      return (        
          <View style={{flex:1}}>

            <View style={{flex:2, alignItems: 'center', backgroundColor: 'white'}}>
              <Image style={{flex:1 }} resizeMode="contain" source={require('./../img/fab.png')} />
            </View>

            <View style={{flex:2, alignItems: 'center', backgroundColor: 'white'}}>
              <Text style={{color: '#2196F3', fontSize: 40}}>
                ¡Bienvenido!
              </Text>
              <Text style={{color: '#2196F3', margin: 20, textAlign: 'center', fontSize: 24}}>
                Te deseamos mucha suerte en la búsqueda de tu permuta.
              </Text>
            </View>

          </View>
      );
  }
}