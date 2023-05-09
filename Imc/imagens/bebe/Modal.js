import React,{Component, useState} from "react";
import {View,Text,Switch,Button,StyleSheet,Modal} from 'react-native'

export default function (props){
    const [visivel,setVisivel]=useState(true)

    return(
     <View >
        <Modal
            animationType="fade"
            transparent={true}
            visible={visivel}  
            >
          
                <View style={estilos.modal}>
                    <Text>
                        cfb cursos
                    </Text>
                    <Text>
                        Curso de React Nativo
                    </Text>
                    <Button
                    title='fechar'
                    onPress={()=>{setVisivel(false)}}
                    />
                    
                </View>
        </Modal>
        <Button
                    title='Mostar'
                    onPress={()=>{setVisivel(true)}}
                    />
    </View>
    )
}

const estilos = StyleSheet.create({
    modal:{
        backgroundColor:'#000',
        margin:20,
        padding:20,
        borderRadius:20,
        elevation:10
    }
})