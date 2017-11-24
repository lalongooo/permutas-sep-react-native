import {StyleSheet, View, Text, Image, Button, Alert} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class Intro extends React.Component {
    render() {


      const nav = this.props.navigation;


        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{height:"100%"}}
                    indicator={this._renderDotIndicator()} >
                                        
                    <View style={ styles.pagerItemContainer }>
                        <View style={{
                          height:450,
                          justifyContent: 'space-between',
                          marginBottom: '10%',
                          alignItems: 'center'}}>
                          
                          <Image style={{ width: 160, height:160, }} source={require('./../img/app_overview_1_buy.png')} />
                          <Text
                            style={{
                                color: '#B2B2B2',                                
                                textAlign: 'center',
                                fontSize:24,
                                fontWeight: 'bold',
                                width: 300,}}>
                            Queremos que la información
                            esté al alcance de todos</Text>

                          <Button
                            style={{ alignSelf: 'flex-end' }}
                            onPress={() => { }}
                            title=""
                            color="#841584"/>
                        </View>
                    </View>


                    <View style={ styles.pagerItemContainer }>
                        <View style={{
                          height:450,
                          justifyContent: 'space-between',
                          marginBottom: '10%',
                          alignItems: 'center'}}>
                          
                          <Image style={{ width: 160, height:160, }} source={require('./../img/app_overview_2_smartphone.png')} />
                          <Text
                            style={{
                                color: '#B2B2B2',                                
                                textAlign: 'center',
                                fontSize:24,
                                fontWeight: 'bold',
                                width: 300,}}>
                            Creemos que nuestra solución
                            hará a más personas felices</Text>

                          <Button
                            style={{ alignSelf: 'flex-end' }}
                            onPress={() => { }}
                            title=""
                            color="#841584"/>
                        </View>
                    </View>


                    <View style={ styles.pagerItemContainer }>
                        <View style={{
                          height:450,
                          justifyContent: 'space-between',
                          marginBottom: '10%',
                          alignItems: 'center'}}>
                          
                          <Image style={{ width: 160, height:160, }} source={require('./../img/app_overview_3_save_money.png')} />
                          <Text
                            style={{
                                color: '#B2B2B2',                                
                                textAlign: 'center',
                                fontSize:24,
                                fontWeight: 'bold',
                                width: 300,}}>
                            De verdad, esperamos
                            que encuentres pronto tu  permuta</Text>

                          <Button
                            style={{ alignSelf: 'flex-end' }}
                            onPress={() => { }}
                            title=""
                            color="#841584"/>
                        </View>
                    </View>


                    <View style={ styles.pagerItemContainer }>
                        <View style={{
                          height:450,
                          justifyContent: 'space-between',
                          marginBottom: '10%',
                          alignItems: 'center'}}>
                          
                          <Image style={{ width: 160, height:160, }} source={require('./../img/app_overview_4_coupons.png')} />                          
                          <Text
                            style={{
                                color: '#B2B2B2',                                
                                textAlign: 'center',
                                fontSize:24,
                                fontWeight: 'bold',
                                width: 300,}}>
                            Recuerda pasar la voz con tus
                            compañeros profesores y
                            serás recompensado</Text>

                          <Button
                            style={{ alignSelf: 'flex-end' }}
                            onPress={() => nav.navigate('OnBoardingTermsAndConditions')}
                            title="Comenzar a publicar"
                            color="#841584"/>
                        </View>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }
    _renderDotIndicator() {
        return <PagerDotIndicator
          dotStyle={{
            height: 16,
            width: 16,
            borderRadius: 8,
            backgroundColor:'#D7D7D7',
            marginBottom:"6%",
            margin: 10}}
          selectedDotStyle={{
            height: 16,
            borderRadius: 8,
            width: 16,
            backgroundColor:'#2196F3',
            marginBottom:"6%",
            margin: 10}}
          pageCount={4} />;
    }

}

const styles = StyleSheet.create({
  pagerItemContainer: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});