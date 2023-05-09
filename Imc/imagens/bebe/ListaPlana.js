import React from "react";
import {View,Text,FlatList,StyleSheet,ImageBackground} from 'react-native'
 

const produtos = [
    {
        id:'001',
        desc:['Mouse','25.00']
    },
    {
        id:'002',
        desc:['Teclado','50.00']
    },
    {
        id:'003',
        desc:['Monitor','400.00']
    },
    {
        id:'004',
        desc:['Monitor','400.00']
    },
    {
        id:'005',
        desc:['Monitor','400.00']
    },
    {
        id:'006',
        desc:['Monitor','400.00']
    },
    {
        id:'007',
        desc:['Monitor','400.00']
    },
    {
        id:'008',
        desc:['Monitor','400.00']
    },
    {
        id:'009',
        desc:['Monitor','400.00']
    },
    {
        id:'0010',
        desc:['Monitor','400.00']
    },
    {
        id:'0011',
        desc:['Monitor','400.00']
    },
    {
        id:'0012',
        desc:['Monitor','400.00']
    },


]

export default function(){
    return(
        <View>
            
            <FlatList
                    data={produtos}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><View style={estilos.item}><Text style={estilos.prod}>Descrição:{item.desc[0]} - Valor:{item.desc[1]}</Text></View>}
            />
            
        </View>
    )
}

const estilos =StyleSheet.create({
    item:{
        backgroundColor:'#008',
        padding: 15,
        marginVertical:10,
        marginHorizontal:16
    },prod:{
            fontSize:20,
            color:'#fff'

       
    }
})