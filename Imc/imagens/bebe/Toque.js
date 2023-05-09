import React,{useState} from "react";
import { View, StyleSheet,TouchableHighlight,Text,TouchableOpacity} from 'react-native'

export default function(){
        const [cont,setCont]=useState(0)
        const contar=()=>{
            setCont(cont + 1)
        }
    return(
        <View>
            <TouchableOpacity
            style={estilos.botao}
            onPress={contar}
            underlayColor='#000'
            >
                <Text>
                    cfb cursos
                </Text>
                
            </TouchableOpacity>
    
            <TouchableHighlight
            style={estilos.botao}
            onPress={contar}
            underlayColor='#000'
            >
                <Text>
                    cfb cursos
                </Text>
            </TouchableHighlight>
            <Text>{cont}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    botao:{
        alignItems:'center',
        backgroundColor:'#ccc',
        padding:10
    }
})