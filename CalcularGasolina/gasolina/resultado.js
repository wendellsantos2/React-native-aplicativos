import { StyleSheet, Text, View,TextInput,TouchableHighlight } from 'react-native';
import React from 'react';
 
export default props=>{
    return(
        <View style = {estilos.bloco}>
            <Text> Melhor Combustivel : {props.resultado} </Text>
        </View>
    )
}
const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10
    }
})