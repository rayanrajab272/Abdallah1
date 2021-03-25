import { registerRootComponent } from 'expo'
import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { Avatar, Button, colors } from 'react-native-elements'
import ProfileImageName from './ProfileImageName'
import { AntDesign, Entypo, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors'
import ItemFooter from '../ItemFooter'
import ProfileAvatarImage from './ProfileAvatarImage';


const Account = (props: any) =>{ 
    return (

        <View>
            <View style={styles.v1sty}>
                <MaterialCommunityIcons name="account-circle" size={30} color={Colors.blue1}style={{marginLeft:10, marginTop:11}}/>
                <Text style={{ alignSelf: 'flex-start', color: Colors.bb4, marginVertical: 12, marginLeft: 0, fontSize: 22, }}> Personal information </Text>
            </View>

            <View style={styles.v2sty}>
                <View style={styles.ve1}>
                    <Text style={styles.nsty}> Student Number </Text>
                    <Text style={styles.smallsty}> 11715128 </Text>
                    <MaterialIcons name='arrow-forward-ios' size={18} color={Colors.grey} style={{ marginLeft: 370 }}></MaterialIcons>

                </View>
                <View style={styles.ve1}>
                    <Text style={styles.nsty}> Name </Text>
                    <Text style={styles.smallsty}> ريان عبد الناصر علي رجب </Text>   
                    <MaterialIcons name='arrow-forward-ios' size={18} color={Colors.grey} style={{ marginLeft: 370 }}></MaterialIcons>

                </View>
                <View style={styles.ve1}>
                    <Text style={styles.nsty}> E-mail address </Text>

                    <Text style={styles.smallsty}> rayanrajab422@gmail.com </Text>
                    <MaterialIcons name='arrow-forward-ios' size={18} color={Colors.blueone} style={{ marginLeft: 370 }}></MaterialIcons>

                </View>
                <View style={styles.ve1}>
                    <Text style={styles.nsty}> Password </Text>
                    <Text style={styles.smallsty}> ****************** </Text>
                    <MaterialIcons name='arrow-forward-ios' size={18} color={Colors.blueone} style={{ marginLeft: 370 }}></MaterialIcons>

                </View>
                
                

            </View>


        </View>









        
    )

}

const styles= StyleSheet.create({
    v1sty: {
        flexDirection:'row',
        marginTop: 30,
        // height:300,
        // backgroundColor:'#fff',
        marginBottom: 10,



    },
    inputsty:{
        width:250,
        maxWidth:'80%',
        height:100,
        maxHeight:'90%',
        textAlign:'left',
        borderBottomWidth:0.5,
       // borderRadius:10,
        paddingLeft:5,
       // marginVertical:2

        

    },
    v2sty: {
        flexDirection: 'column',
        borderTopWidth: 0.5,
        //borderBottomWidth: 0.5,
        borderTopColor: '#ccc',
        borderBottomColor: '#ccc',
        marginTop: 10,
        height: 60,
        width: '100%',
        //marginBottom:100,
        //backgroundColor: 'white'




    },
    ve1: {
        marginTop: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        //borderTopColor:'#ccc',
        //borderTopWidth:0.5,
        marginLeft: 10,
        height: 70,
        flexDirection: 'column'



    },
    nsty: {
        margin: 5,
        fontSize:16,
        fontWeight:'500'

    },
    smallsty:{
        fontSize:14,
        fontWeight:'300',
        marginLeft:5,
        marginTop:2,
        

    },


})


export default Account;