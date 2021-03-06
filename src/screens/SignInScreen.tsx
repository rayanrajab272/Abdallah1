import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Text, Button } from 'react-native-elements'
import Colors from '../../constants/Colors'
import Circles from '../components/UI/Circles'
import SignIn from '../components/UI/SignIn'


const FeedScreen = (props: any) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <View style={styles.v2}>
                <SignIn style={styles.si} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    c1: {
        // margin:50,
        //top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
    si: {
        // alignContent:'center',


    },
    v2: {
        // alignItems:'flex-start',
        //  marginLeft:50
    }
})
export default FeedScreen;