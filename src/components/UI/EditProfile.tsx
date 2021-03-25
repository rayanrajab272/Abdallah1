import { registerRootComponent } from 'expo'
import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import ProfileImageName from './ProfileImageName'
import { AntDesign, Entypo, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors'
import ItemFooter from '../ItemFooter'
import ProfileAvatarImage from './ProfileAvatarImage'


const EditProfile =(props: any) => {
    return (
        <View>
            <View style={styles.v1sty}>
                <Text style={{ alignSelf: 'flex-start', color: 'black',marginVertical:10, marginLeft:5, fontSize:22,}}> Settings </Text>
            </View>
            <View style={styles.vprofimgstyle}>
                <View style={{flexDirection:'row'}}>
                <Avatar
                    rounded
                    size='large'
                    source={require('../../../assets/drab.jpg')}
                   // onPress={() => console.log("Works!")}
                    //activeOpacity={0.7}
                    avatarStyle={{margin:10}}
                >
                    <Avatar.Accessory />
                </Avatar>
                <Text style={{marginVertical:25, marginHorizontal:0, fontSize:16}}> Abdallah Hasan Rashed </Text>
                </View>
                <Text style={{textDecorationLine:'underline', color:Colors.primary, marginHorizontal:15, fontSize:15, alignSelf:'flex-end', marginTop:-20}}> Edit</Text>
            </View>

            <View style={styles.v2sty}>
                <View style={styles.ve1}>
                    <MaterialCommunityIcons name="account" size={25} color={Colors.bb2}/>
                    <Text style={styles.nsty}> Account </Text>
                    <AntDesign name='arrowright'size={20} color={Colors.grey} style={{ marginLeft:275, marginTop:5, marginRight:5}}/>
                </View>
                <View style={styles.ve1}>
                    <AntDesign name="notification" size={20} color={Colors.redd} />
                    <Text style={styles.nsty}> Notifications </Text>
                    <AntDesign name='arrowright' size={20} color={Colors.grey} style={{ marginLeft: 252, marginTop: 5, marginRight:5 }} />
                </View>
                <View style={styles.ve11}>
                    <Entypo name="chat" size={25} color={Colors.darkseagreen} />
                    <Text style={styles.nsty}> Chat </Text>
                    <AntDesign name='arrowright' size={20} color={Colors.grey} style={{ marginLeft: 298, marginTop: 5, marginRight: 5 }} />
                </View>
               
            </View>

            <View style={styles.ve3}>

                <View style={styles.ve4}>
                    <Entypo name="help" size={25} color={Colors.cadetblue} />
                    <Text style={styles.nsty}> Help </Text>
                    <AntDesign name='arrowright' size={20} color={Colors.grey} style={{ marginTop: 5, marginRight: 5, marginLeft:298 }} />
                </View>
                <View style={styles.ve12}>
                    <AntDesign name="logout" size={20} color={Colors.bluetwo} />
                    <Text style={styles.nsty}> Log out </Text>
                    <AntDesign name='arrowright' size={20} color={Colors.grey} style={{ marginTop: 5, marginRight: 5, marginLeft: 284 }} />
                </View>
            </View>






        </View>






    )

}
const styles = StyleSheet.create({
    v1sty :{
        //flexDirection:'column',
        marginTop:30,
       // height:300,
       // backgroundColor:'#fff',
       marginBottom:10,



    },
    v2sty :{
        flexDirection:'column',
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderTopColor:'#ccc',
        borderBottomColor:'#ccc',
        marginTop:50,
        height:140,
        width:'100%',
        backgroundColor:'white'




    },
    vprofimgstyle:{
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderBottomColor:'#ccc',
        borderTopColor:'#ccc',
        width:'100%',
        height:80,
        backgroundColor:'white',
        


    },
    ve1:{
        marginTop:15,
        borderBottomColor:'#ccc',
        borderBottomWidth:0.5,
        //borderTopColor:'#ccc',
        //borderTopWidth:0.5,
        marginLeft:10,
        height:30,
        flexDirection:'row'



    },
    nsty:{
        margin:5,
    },
    ve3:{
        flexDirection: 'column',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopColor: '#ccc',
        borderBottomColor: '#ccc',
        marginTop: 70,
        height: 90,
        width: '100%',
        backgroundColor: 'white'
    },

    ve4:{
        marginVertical: 15,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        //borderTopColor:'#ccc',
        //borderTopWidth:0.5,
        marginLeft: 10,
        height: 30,
        flexDirection: 'row'

    },
    ve11:{
        marginTop: 15,
       // borderBottomColor: '#ccc',
        //borderBottomWidth: 0.5,
        //borderTopColor:'#ccc',
        //borderTopWidth:0.5,
        marginLeft: 10,
        height: 30,
        flexDirection: 'row'

    },
    ve12: {
        marginTop: 0,
        // borderBottomColor: '#ccc',
        //borderBottomWidth: 0.5,
        //borderTopColor:'#ccc',
        //borderTopWidth:0.5,
        marginLeft: 10,
        height: 30,
        flexDirection: 'row'

    }






})

export default EditProfile;