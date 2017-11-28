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
          <View style={{flex:1, backgroundColor: 'white'}}>

            <View style={{flex:2, backgroundColor: 'white'}}>
              <Text style={{color: '#FC3875', fontSize: 32, margin: 10}}>
                  Tu lugar de origen
                </Text>
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