import React from 'react'
import { View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Post from '../components/PostItem'
import GridItemTile from '../components/GridItemTile'
import Colors from '../../constants/Colors'
import PostHeader from '../components/UI/PostHeader'
import { Avatar, Button } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import ProfileAvatarImage from '../components/UI/ProfileAvatarImage'
import PostFooter from '../components/PostFooter'
import CreatNewPost from '../components/CreatNewPost'
import WritePost from '../components/WritePost'
import PostItem from '../components/PostItem'

const TobTabs = createMaterialTopTabNavigator()




const Courses = (props) => {
    const courses = [
        {
            id: 1,
            name: 'NetWork I'
        },
        {
            id: 2,
            name: 'Network II'
        },
        {
            id: 3,
            name: 'Security'
        },
        {
            id: 4,
            name: 'Network Lab'
        },
        {
            id: 5,
            name: 'Graduation Project 1'
        },
        {
            id: 6,
            name: 'Graduation Project 2'
        },

    ]
    return (
        <FlatList
            numColumns={2}
            data={courses}
            renderItem={(itemData) => {
                return <GridItemTile onSelect={() => props.navigation.navigate('Material', { title: itemData.item.name })} itemData={itemData} />
            }}
        />
    )
}

const Questions = (props) => {
    return (
        <View>
            <Text>
                Hello Questions
            </Text>
        </View>
    )
}

const Timeline = (props) => {
    return (
        <View style={{backgroundColor:'#fff', borderTopWidth:0.3, borderColor:Colors.bb}}>
                    {props.children}
                    <View style={{marginTop:5}} >
                <WritePost onTouch={() => props.navigation.navigate('Create Post')} />
         </View>
            <CreatNewPost/>
            <View style={{marginTop:10, backgroundColor:'#ccc'}}>
                <Text style={{ marginTop: 10, fontSize: 18, color: Colors.blue1, marginLeft: 5, fontWeight: 'bold' }}> Posts </Text>
            <PostItem onSelect={() => props.navigation.navigate('Full Post')}>
                <PostFooter/>
            </PostItem>
            </View>
        </View>
    )
}
const ProfileTabNavigator = (props: any) => {
    return (
        <TobTabs.Navigator  initialRouteName='Timeline'>

            <TobTabs.Screen
                name='Timeline'
                component={Timeline}
            />

            <TobTabs.Screen
                name='Courses'
                component={Courses}
            />

            <TobTabs.Screen
                name='Questions'
                component={Questions}
            />
        </TobTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    newpost: {
        width: 356,
        margin:2,
       // backgroundColor: '#fff',
        marginVertical: 13,
        //borderColor:Colors.bluetwo,
        //borderWidth:1
    },
    postBottom: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#999'



    },
    newpostTextView: {
        padding: 3,
    },
    newpostText: {
        fontSize: 14,
        //fontFamily: 'Rubik'
    }
})


export default ProfileTabNavigator;
