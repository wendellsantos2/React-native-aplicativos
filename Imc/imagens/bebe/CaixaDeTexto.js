import React,{useState} from "react";
import {View,TextInput,Text} from "react-native"


export default function(){

    const [nome,setNome]=useState('wendell')
    const mudarNome=()=>{}
    return(
        <View>
            <Text> Digite seu nome: </Text>
            <TextInput
            
            style={{borderWidth:1,borderColor:'#000'}}
            value={nome}
            onChangeText={text=>setNome(text)}
            autoCapitalize="none"
           
            /> 
            <Text>Valor Digitado: {nome}</Text>
        </View>
    )
}