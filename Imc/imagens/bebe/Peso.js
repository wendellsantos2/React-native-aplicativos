import React  from "react";
import {StyleSheet,View,Text ,TextInput } from "react-native";

export default props =>{
    return(
        <View style={estilos.bloco}> 
        <Text>Informe seu Peso: </Text>
            <TextInput
              autoFocus={true}
              style={estilos.txt}
              onChangeText={text=>props.aoModificar(text)}
              >
            </TextInput>
    </View>
    )
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
      borderRadius:10,
      
     },
  
  }); 
   
  
  