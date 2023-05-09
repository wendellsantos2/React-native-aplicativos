import React from 'react'
import { Text, View ,StyleSheet} from 'react-native';
import Estilos from '../estilos/Estilos.js'


let nt ;
 

export default function(props){
    nt=props.nota
  
    return(
        <Text style={Estilos.textoCursos}> Cfb cursos - Curso de {props.curso}: Nota={nt} </Text>
    )
}
    
 
 