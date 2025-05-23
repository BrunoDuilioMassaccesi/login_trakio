import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ImageBackground, TouchableOpacity, Pressable, Image, Button } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const imgLocal2 = require('./assets/logo.png');
  return (
    <View style={styles.container}>
      <StatusBar style='light'></StatusBar>
      <Image source={imgLocal2} style={styles.logo} />
      <TextInput style={styles.texto} placeholder='🤷    Salvador Soncini' />
      <TextInput style={styles.gmail} placeholder='salvadorsoncini@gmail.com' />
      <TextInput style={styles.contrsaena} placeholder='**********' />

            <Button style={styles.boton} >
                <Text style={styles.textoBoton}>Soy un infoPibe</Text>
            </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1D1D',
    alignItems: 'center',
  },
  logo:
  {
    width:150,
    height:150,
    borderRadius:10,
    marginTop:150,
  },
  texto: {
    backgroundColor: '#fff',
    marginTop: 80,
    padding: 10,
    paddingRight: 50,
    paddingLeft: 50,
    borderRadius: 7,
    borderWidth: 2.5,        
    borderColor: '#1359BF',   
  },  
  gmail:
  {
    backgroundColor: '#fff',
    padding:10,
    paddingRight:50,
    paddingLeft:50,
    borderRadius:7,
    marginTop:30,
    borderWidth: 2.5,        
    borderColor: '#1359BF',
  },
  contrsaena:
  {
    backgroundColor: '#fff',
    padding:10,
    paddingRight:50,
    paddingLeft:50,
    borderRadius:7,
    marginTop:30,
    textAlign:'center',
    borderWidth: 2.5,        
    borderColor: '#1359BF',
  },
});
