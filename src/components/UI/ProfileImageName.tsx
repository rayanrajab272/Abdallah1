import { registerRootComponent } from 'expo'
import React from 'react'
import { View, Text, StyleSheet , Image } from 'react-native'
import ProfileAvatarImage from './ProfileAvatarImage'

const ProfileImageName = (props: any) => {
    return (
        <View style={styles.infoView}>
            <ProfileAvatarImage/>
            <View style={styles.texts}>
                <Text style={styles.name}>Abdallah Dereia</Text>
                {props.children}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    infoView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    texts: {
        flexDirection:'column',
    }
    
})

export default ProfileImageName;