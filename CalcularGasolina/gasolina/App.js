import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React, {useState,Component} from 'react';
import Gasolina from './componentes/gasolina/gasolina.js';
import Etanol from './componentes/gasolina/etanol.js';
import BtnCalcular from './componentes/gasolina/btnCalcular.js';
import Resultado from './componentes/gasolina/resultado.js';
import ImgResultado from './componentes/gasolina/imgResultado.js';
export default function App() {

  const [gasolina,setGasolina] = useState(0)
  const [etanol,setEtanol] = useState(0)
  const [resultado,setResultado] = useState('')

  const calcular=()=>{
    if(!gasolina){
      alert('Informe o preço da Gasolina')
      return
    }
    if(!etanol){
      alert('Informe o preço do Etanol')
      return
    }
    let res
    let calc=((etanol/gasolina)*100).toFixed(1)
    if(calc >70){
      res='Gasolina'
    }else{
      res='Etanol'
    }
    alert('O Etanol está custando' + calc+ '% da Gasolina. Portanto é melhor abastcer com ' + res)
    setResultado(res)
  }

  const limpar=()=>{
    setResultado('')
  }
  const setarEtanol=(v)=>{  
    limpar()
    setEtanol(v)
  }
  const setarGasolina=(v)=>{  
    limpar()
    setGasolina(v)
  }
  return (
    <SafeAreaView style={estilos.principal} >
    <Gasolina aoModificar={setarGasolina}/>
    <Etanol aoModificar={setarEtanol}/>
    <BtnCalcular aoPressionar={calcular}/>
    <Resultado resultado={resultado}/>
    <ImgResultado comb={resultado.charAt(0)}/>
    </SafeAreaView>
  );   
}
 
 const estilos = StyleSheet.create({
    principal:{
      padding: 50,
    }
    

 })