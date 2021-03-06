import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CreatePostHeader from '../components/UI/CreatePostHeader';
import EditProfile from '../components/UI/EditProfile';
const EditProfileScreen = (props: any) => {
    return (
        <View style={styles.postView}>
            <EditProfile />
        </View>
    )
}

const styles = StyleSheet.create({
    postView: {
        flex: 1,
    }
})

export default EditProfileScreen;