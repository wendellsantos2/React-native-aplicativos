import React  from "react";
import {StyleSheet,View,Image} from "react-native";

export default function tabela(){
    return(
        <View style={estilos.bloco}>
            <View>
                <Image
                    style={estilos.tabela}
                   
                    />
            </View>
      </View>
    )
}


const estilos = StyleSheet.create({ 

   
    bloco:{
      marginBottom:20
    },
    tabela:{
        width:'100%',
        resizeMode:'contain',
        marginTop:-21
    }
  
  }); 
   
  
  