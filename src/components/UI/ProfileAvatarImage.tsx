import React from 'react'
import {View , Text , StyleSheet , Image} from 'react-native'

const ProfileAvatarImage = (props: any)  => {
    return(
        <Image
        style={styles.profileImage}
        source={require('../../../assets/drab.jpg')}
    />
    )
}

const styles = StyleSheet.create({
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 5
    },
    
})

export default ProfileAvatarImage;