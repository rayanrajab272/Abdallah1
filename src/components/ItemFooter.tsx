import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Colors from '../../constants/Colors'
import PostFooter from './PostFooter'

const ItemFooter = (props: any) => {
    return (
        <View style={{...styles.itemFooter,...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    itemFooter:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30,
        width:'100%',
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:'#999'
        
    },
})

export default ItemFooter;