import { registerRootComponent } from 'expo'
import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import ProfileImageName from './ProfileImageName'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors'
import ItemFooter from '../ItemFooter'

const EditProfile =(props: any) => {
    return (
        <View>
            <View style={styles.v1sty}>
                <Text style={{ alignSelf: 'flex-start', color: Colors.bb2,marginTop:5, marginLeft:5 }}> Personal information </Text>
            </View>
            <View style={styles.v2sty}>

            </View>






        </View>






    )

}
const styles = StyleSheet.create({
    v1sty :{
        flexDirection:'column',


    },
    v2sty :{
        flexDirection:'column',
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderTopColor:'#ccc',
        borderBottomColor:'#ccc',
        marginTop:10,



    },







})

export default EditProfile;