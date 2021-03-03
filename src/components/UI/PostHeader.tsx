import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import ProfileAvatarImage from './ProfileAvatarImage'
const PostHeader = (props: any) => {
    return (
        <View style={styles.postHeaderMainView}>
            <View style={styles.postInfoView}>
                <ProfileAvatarImage/>
                <View style={styles.userInfoView}>
                    <Text style={styles.name}>Abdallah Dereia</Text>
                    <Text style={styles.additionalInfo}>Computer Engineer</Text>
                    <Text style={styles.additionalInfo}>5h.</Text>
                </View>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    postHeaderMainView: {
        
    },
    postInfoView: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    userInfoView: {

    },
    
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    additionalInfo: {
        color: '#ccc',
        fontWeight: 'normal'
    }
})

export default PostHeader;