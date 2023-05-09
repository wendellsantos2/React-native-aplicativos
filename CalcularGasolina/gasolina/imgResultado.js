import { StyleSheet, Text, View, Image  } from 'react-native';
import React from 'react';
 
export default props=>{
    return(
        <View style = {estilos.bloco}>
            {
            props.comb ==  '' ?
            
           
            <Image
            source={require('../../assets/2089515.png')}
            style={estilos.bomba}
            
            />
        :
            props.comb ==  'G' ?
                
            
            <Image
            source={require('../../assets/transferir.png')}
            style={estilos.bomba}
        
        />
        :
        
                
            <Image
            source={require('../../assets/5229784.png')}
            style={estilos.bomba}
        
                />
        }
        </View>
    )
}
const estilos = StyleSheet.create({
    bloco:{
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center'
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

    },
    bomba:{
        width:218,
        height:200,
        resizeMode:'stretch'

    }
})