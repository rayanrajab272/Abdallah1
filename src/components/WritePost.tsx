import React from 'react'
import { View,TouchableWithoutFeedback, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput } from 'react-native'
import ProfileAvatarImage from './UI/ProfileAvatarImage'
const WritePost = (props: any) => {
    return (
        <View style={styles.mainView}>
            <ProfileAvatarImage/>
            <TouchableWithoutFeedback onPress={props.onTouch}>
                <View style={styles.inputView}>
                    <Text style={styles.inputPlaceHolder}>Write Something...</Text>
                </View>
            </TouchableWithoutFeedback>
            
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        //marginVertical:15,
        flexDirection:'row',
        padding:10,
        backgroundColor:'white'
    },
   
    inputView:{
        justifyContent:'center',
        borderWidth:1.2,
        borderRadius:50,
        width:'85%',
        paddingLeft:10,
        borderColor:'#ccc',
        height:42,
        marginTop:10
    },
    postInput:{
        borderWidth:1,
        padding:10,
        borderRadius:20,
    },
    inputPlaceHolder:{
        color:'#ccc',
        fontWeight:'normal'
    }
})

export default WritePost