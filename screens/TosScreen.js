import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Image
} from 'react-native';

export default class TosScreen extends React.Component {

  render() {
    const nav = this.props.navigation;

    return (

      <View style={{flex: 1}}>
          
        <View style={styles.tosImgHeader}>
          <Image style={{ height: 100, width: 100 }} source={require('./../img/appicon.png')} />
        </View>        

        <ScrollView style={{backgroundColor: '#fff',width: '100%', height: '100%', padding: 32}}>
          <Text style={styles.tosTextTitle}>
            ¡Gracias por utilizar Permutas SEP!
            {"\n"}
          </Text>
          <Text style={styles.tosText}>
            Antes de comenzar, considera leer esta importante información legal referente al uso de esta aplicación. ¡Solo te tomará un minuto!
            {"\n"}
            {"\n"}
            Permutas SEP es un proyecto desarrollado con el único objetivo
            de solventar una necesidad existente y demandada por los profesores. Al seleccionar la
            opción ACEPTAR indicas que te sujetas a las siguientes condiciones de uso: Contenido aceptable:
            Cualquier contenido (fotos, texto, imágenes, etc.) es generado por los usuarios de la aplicación y
            no representan los intereses de los autores de la aplicación, mismo que no deberá ser en ningún
            momento ofensivo, discriminatorio, pornográfico, difamatorio e ilegal. Así mismo, los usuarios se
            obligan a usar de manera responsable el contenido compartido en la aplicación. Derechos de autor y
            marcas registradas. Permutas SEP fué desarrollado con ayuda de software de código abierto, en la sección
            ACERCA DE puedes encontrar información mas detallada. Usamos también software propietario de Google,
            cuyo uso está regido por los términos que puede encontrar en esta dirección. https://developers.google.com/maps/terms
          </Text>
        </ScrollView>
        
        <View style={styles.bottomBar}>
            <Text style={{color: 'white', fontSize: 20}}>
              Cancelar
            </Text>
            <Text
              style={{color: 'white', fontSize: 20}}
              onPress={() => nav.navigate('Intro')}>
              Aceptar
            </Text>
        </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbb',
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
  bottomBar: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#2196f3',
    justifyContent: 'space-around',

  },
  tosImgHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  tosTextTitle: {
    textAlign: 'center',
    color: '#2196f3',
    fontSize: 20,
  },
  tosText: {
    color: '#9E9E9E',
    textAlign: 'justify',
  }
});