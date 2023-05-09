import { StyleSheet, Text, View,TextInput,TouchableHighlight } from 'react-native';
import React from 'react';
 
export default props=>{
    return(
        <View style = {estilos.bloco}>
            
            <TouchableHighlight
            onPress={props.aoPressionar}
            style = {estilos.btn} >   
            <Text style ={estilos.txtBtn}> Calcular </Text>
                
            </TouchableHighlight>
         
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

    },
    btn:{
        backgroundColor:'#800',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        padding:15,
        },
    txtBtn:{
        textTransform:'uppercase',
        color:'#fff',

    }
})