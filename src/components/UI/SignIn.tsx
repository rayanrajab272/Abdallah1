import React from 'react'
import {View, StyleSheet, Text, TextInput, Button} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
//import { TextInput } from 'react-native-gesture-handler'
import Colors from '../../../constants/Colors'
import Circles from './Circles'


const SignIn =(props : any)=>{
    return (
        <View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Circles />
                <Text style={styles.tit}> Sign In </Text>
                <TextInput 
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSubmit
                placeholder='E-mail address' style={styles.input} />
                <TextInput
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    blurOnSubmit
                    placeholder='Password' style={styles.input2} />
                    <Text style={ styles.forg}>Forget Password?</Text>
                    <View style={styles.butt}>
                        <Button title="Sign In" color={'white'}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text >______</Text>
                        <Text style={{marginTop:0, fontSize:18, color:Colors.pur3}}> or </Text>
                    <Text>______</Text>
                    </View>
                    <View>
                        <Text style={{marginVertical:10, fontSize:12, textDecorationLine:'underline', color:Colors.bb2,}}> Create new account</Text>
                    </View>
            </View>

        </View>

    )

}

const styles= StyleSheet.create({
    tit:{
        fontSize:30,
        color:Colors.pur3,
        //marginTop:20,
        //paddingLeft:30,
        //alignContent:'center',
       // alignItems:'flex-start',
       //marginLeft:-200,
      // marginVertical:10
     // marginTop:-180,
      marginBottom:30




    },
    input:{
        borderBottomWidth:0.5,
        borderBottomColor:'grey',
        marginBottom:50,
        marginLeft:0,
        width:300,
        paddingLeft:10
        


    },
    input2: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        marginBottom: 8,
        marginLeft: 0,
        width: 300,
        paddingLeft: 10



    },
    tit2:{
    //marginTop:15,
    color:'grey',
    fontSize:15,
    //marginBottom:10,
    marginLeft:-200,
    marginTop:10,



    },
    forg:{
        marginLeft:210,
        fontSize:11,
        color:'grey',
        textDecorationLine:'underline'
    


    },
    butt:{
        width: '100%',
        //flex:1,
        height:40,
       // alignContent:'center',
       // alignItems:'center',
       // alignSelf:'center',
        backgroundColor:Colors.pur3,
        marginVertical:50,
        borderRadius:20,
        



    },


})

export default SignIn;