import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CreatePostHeader from '../components/UI/CreatePostHeader';
import EditProfile from '../components/UI/EditProfile';
const EditProfileScreen = (props: any) => {
    return (
        <View style={{ flex: 1, }}>

            <EditProfile />

        </View>
    )
}

const styles = StyleSheet.create({
  
})

export default EditProfileScreen;