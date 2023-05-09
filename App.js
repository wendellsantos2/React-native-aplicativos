import { StyleSheet, Text, View,SafeAreaView ,TouchableHighlight,TextInput} from 'react-native';
import React, {useState,Component} from 'react';
 
export default function App() {
  return (
       <View style={estilos.botoes}>
       <Text> Calculadora - CFB Cursos </Text> 
        <Text> Curso de {curso}</Text>
      </View>
  );   
}
 
 const estilos = StyleSheet.create({
   displayOperacao:{
    borderRadius:10,
    borderWidth:1,
    padding:10,
    backgroundColor : '#ccc'
   },
   container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center' 

   },
   botoes:{
    flexDirection:'row',
    flexWrap:'wrap'
   }
 })