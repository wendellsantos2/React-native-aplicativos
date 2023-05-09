import React  from "react";
import {StyleSheet,View,Text ,TextInput } from "react-native";

export default props =>{
    return(
        <View style={estilos.bloco}> 
         <Text >
            Resultado :{props.resultado}
          </Text>
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
   
  
  