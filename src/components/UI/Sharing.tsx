import { registerRootComponent } from 'expo'
import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { Avatar, Button, colors } from 'react-native-elements'
import ProfileImageName from './ProfileImageName'
import { AntDesign, Entypo, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors'
import ItemFooter from '../ItemFooter'
import ProfileAvatarImage from './ProfileAvatarImage';


const Sharing = (props: any)=>{

    return(
        <View>
            <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:20, fontWeight:'400', color:Colors.blue1, alignSelf:'flex-start'}}> Sharing Page </Text>
                <View style={{alignSelf:'flex-end'}}>
                    <Feather name="plus-square" size={18} color={Colors.bb5} ></Feather>
                    </View>
                
            </View>

        </View>
    )

}

const styles=StyleSheet.create({

})


export default Sharing;