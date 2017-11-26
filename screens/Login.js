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

            <View style={{flex:2, margin: 20, alignItems:'center', }}>
              <Image style={{flex:1}} resizeMode="contain" source={require('./../img/appicon.png')} />
            </View>

            <View style={{flex:1, marginLeft: '8%', marginRight: '8%'}}>
            </View>

            <View style={{flex:1, marginLeft: '8%', marginRight: '8%'}}>
              <TextInput style={{height:40}} editable={true} maxLength={15}
                placeholder="Tu correo" underlineColorAndroid="transparent"/>
              <View style={{marginTop: -4, height:2, backgroundColor:'#2196f3'}}/>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                <Text style={{color:'#D50000', fontSize:12, marginTop:4}}>Tu nombre de usuario es inválido</Text>
                <Image style={{height:16, width:16, marginTop:2}} source={require('./../img/warning_icon.png')} />
              </View>
            </View>

            <View style={{flex:1, marginLeft: '8%', marginRight: '8%'}}>
              <TextInput style={{height:40}} editable={true} maxLength={15} placeholder="Tu contraseña" underlineColorAndroid="transparent"/>
              <View style={{marginTop: -4, height:2, backgroundColor:'#2196f3'}}/>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                <Text style={{color:'#D50000', fontSize:12, marginTop:4}}>Tu nombre de usuario es inválido</Text>
                <Image style={{height:16, width:16, marginTop:2}} source={require('./../img/warning_icon.png')} />
              </View>
            </View>

            <View style={{flex:1, marginLeft: '8%', marginRight: '8%', marginTop: 12, justifyContent: 'center'}}>
              <View style={{height:36, backgroundColor:'#FC3875', justifyContent: 'center'}}>
                <Text style={{color:'white', fontSize:18, alignSelf: 'center'}}>Iniciar sesión</Text>
              </View>
            </View>

            <View style={{flex:1, marginLeft: '8%', marginRight: '8%', justifyContent: 'center'}}>
            </View>

            <View style={{flex:1, marginLeft: '8%', marginRight: '8%', marginTop: 12}}>
            </View>

            <View style={{flex:1, marginLeft: '8%', marginRight: '8%', marginTop: 12}}>
            </View>

            <View style={{flex:1,backgroundColor: 'white', marginLeft: '8%', marginRight: '8%', alignItems:'center'}}>
            </View>

          </View>
      );
  }
}

const styles = StyleSheet.create({
  pagerItemContainer: {
    
  }
});