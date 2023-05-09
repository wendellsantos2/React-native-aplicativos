import { StyleSheet, Text, View,TextInput } from 'react-native';
import React from 'react';
 
export default props=>{
    return(
        <View style = {estilos.bloco}>
            <Text>Digite o preço da Gasolina </Text>
            <TextInput 
            style={estilos.txt} 
            keyboardType='numbers-and-punctuation'
            onChangeText={text=>props.aoModificar(text)}/>
        </View>
    )
}
const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10
    },
    txt:{
        width:'100%',
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,

    }
})