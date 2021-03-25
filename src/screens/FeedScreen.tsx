import React from 'react'
import {View , StyleSheet} from 'react-native'
import {Avatar , Text , Button} from 'react-native-elements'
import Colors from '../../constants/Colors'
import Account from '../components/UI/Account'
import Circles from '../components/UI/Circles'
import EditProfile from '../components/UI/EditProfile'
import SignIn from '../components/UI/SignIn';
import ShareCen from '../components/UI/ShareCen'


const FeedScreen = (props:any) => {
    return(
        <View style={{flex:1}}>

            <ShareCen/>
         
        </View>
    )
}

const styles= StyleSheet.create({
    c1:{
       // margin:50,
        //top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
    si:{
       // alignContent:'center',
        
        
    },
    v2:{
       // alignItems:'flex-start',
      //  marginLeft:50
    }
})
export default FeedScreen;