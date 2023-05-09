import React  from "react";
import {StyleSheet,View,Text ,TextInput,TouchableHighlight } from "react-native";

export default props =>{
    return(
        <View style={estilos.bloco}>
            <TouchableHighlight style={estilos.btnCalc}
            onPress={()=>props.aoClicar()}>
                <Text style={estilos.txtBtn}>Calcular IMC</Text>
            </TouchableHighlight>
    </View>
    )
}


const estilos = StyleSheet.create({ 

    btnCalc:{
        backgroundColor:'#048',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:20
      },
      txtBtn:{
        fontSize:15,
        textTransform:'uppercase',
        color:'#fff'
      }
  }); 
   
  
  