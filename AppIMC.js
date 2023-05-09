import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React, {useState,Component} from 'react';
import Peso from './componentes/Peso';
import Altura from './componentes/Altura';
import BtnCalcular from './componentes/btnCalcular';
import Resultado from './componentes/Resultado';
import Tabela from './componentes/tabela';
export default function calcimc() {
  const [peso,setPeso]= useState(0)
  const [altura,setAltura]= useState(0)
  const [resultado,setResultado]= useState(0)

 
  function calcImc(){
    if(peso ==0 || !peso){
      alert('informe o Peso')
      return
    } 
    if(altura ==0 || !altura){
      alert('informe a Altura')
      return
    } 

    const r= peso/(Math.pow(altura,2))

    setResultado(r.toFixed(1))
  }
  return (
    <SafeAreaView estilos={estilos.corpo} >
      <View style={estilos.bloco}>
        <Text> Calculadora de IMC </Text>
      </View>
        <Peso aoModificar={setPeso}/>
          <Altura aoModificar={setAltura}/>
            <BtnCalcular aoClicar={calcImc}/>
              <Resultado resultado={resultado}/>
                <Tabela/>
    </SafeAreaView>
  );   
}
 
 const estilos = StyleSheet.create({
  corpo:{
    padding:10
  },
  bloco:{
    marginBottom:20
  },
  txt:{
    width:'100%',
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    borderRadius:10
  },

 })