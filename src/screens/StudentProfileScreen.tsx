import React from 'react'
import {View , StyleSheet , ScrollView} from 'react-native'
import {} from 'react-native-elements'
import Colors from '../../constants/Colors'
import Profile from '../components/Profile'
import ProfileTabNavigaror from '../navigation/ProfileTabNavigator'


const StudentProfileScreen = (props:any) => {
    return(
        <ScrollView style={styles.profileMainView}>
            <Profile onCreatePost={()=>props.navigation.navigate('Create Post')}/>
            <ProfileTabNavigaror/>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    profileMainView:{
        flex:1,
        backgroundColor:'#fff'
    }
})

export default StudentProfileScreen;