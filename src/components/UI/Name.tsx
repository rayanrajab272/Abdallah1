import { registerRootComponent } from 'expo'
import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { Avatar, Button, colors } from 'react-native-elements'
import ProfileImageName from './ProfileImageName'
import { AntDesign, Entypo, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors'
import ItemFooter from '../ItemFooter'
import ProfileAvatarImage from './ProfileAvatarImage';


const Name = (props:any)=>{
    return(

        <View>
            <View>
                <Text> Name </Text>
            </View>

        </View>
    )

}

const styles=StyleSheet.create({

})

export default Name;