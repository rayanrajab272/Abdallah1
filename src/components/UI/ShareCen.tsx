import { registerRootComponent } from 'expo'
import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { Avatar, Button, colors } from 'react-native-elements'
import ProfileImageName from './ProfileImageName'
import { AntDesign, Entypo, EvilIcons, Feather, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors'
import ItemFooter from '../ItemFooter'
import ProfileAvatarImage from './ProfileAvatarImage';

const ShareCen =(props: any)=>{
    return (
        <View>
            <View style={{ flexDirection: 'row', marginTop:20 , borderBottomWidth:0.3,paddingBottom:10, }}>
                <Text style={{ fontSize: 22, fontWeight: '400', color:'black', alignSelf: 'flex-start' }}> Sharing Page </Text>
                <View style={{ alignSelf: 'flex-end', marginLeft:245 , marginRight:5,  }}>
                    <Feather name="plus-square" size={25} color={Colors.bluetwo} ></Feather>
                </View>
            </View>

            <View style={styles.basv}> 
            <View style={{flexDirection:'row', margin:10, }}>
                <ProfileAvatarImage />
                    <Text ellipsizeMode ='tail' style={styles.basnam} > ريان عبد الناصر رجب</Text>
                <Text style={{marginTop:15, fontSize:16, fontWeight:'600'}}> | </Text>
                    <Text ellipsizeMode ='tail'style={styles.basnam}>Compiler </Text>
                    <Entypo name="dots-three-horizontal" size={18} style={{alignSelf:'auto',marginLeft:'28%', marginTop:15}}></Entypo>
            </View>
            <View style={styles.v2st}>
                    <Image source={ require('../../../assets/pic.jpg')}
                        style={{ width: 500, maxWidth: '99%', height: 300,}} />

              
            </View>
        
                <View style={styles.desc}>
                    <Text style={styles.descbstyle}>This is a cpu lab Kit kjnmnhjvgtdrt nkjlioytd hhhhhh oillit nhkjutrnmln</Text>
                </View>
           

            </View>


        </View>
    )

}

const styles= StyleSheet.create({
    circle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: "red",
        borderColor:'red',
        marginHorizontal:50,
    },
    basv:{
        backgroundColor:'white',
        height:'100%',
        width:'100%',
    },
    basnam:{
        fontSize:15,
        fontWeight:'300',
        textDecorationLine:'underline',
        alignSelf: 'auto',
        marginTop:15,
        width:100,
        

    },
    v2st:{
        alignContent:'center',
        marginVertical:2,
        marginHorizontal:2,
        height:300,
        maxHeight:'50%',
        width:500,
        maxWidth:'99%',
        borderWidth:0.5,
        borderColor:Colors.grey,

    },
    desc:{
        margin:5,
        maxHeight:'50%',
        maxWidth:'100%',
        flexDirection:'column',
        paddingBottom:10,
        borderBottomColor:Colors.grey,
        borderBottomWidth:0.7,
    },

    namestyles:{
        fontSize:18,
        fontWeight:'500',
        alignItems:'flex-start'

    },
    descbstyle:{

        fontSize: 16,
        fontWeight: '400',
        alignItems: 'flex-start',
        marginTop:4
    },
    sharestyle:{
        maxWidth:'80%',
        marginVertical:10,
        backgroundColor:Colors.darkseagreen,
        marginLeft:'10%',
        height:30,
        borderRadius:2,
                
    }

})

export default ShareCen;