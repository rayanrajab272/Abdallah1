import React from 'react'
import {View , Text, StyleSheet} from 'react-native'
import CreatePostHeader from '../components/UI/CreatePostHeader';
const CreatePostScreen = (props:any) => {
    return(
        <View style={styles.postView}>
            <CreatePostHeader/>
        </View>
    )
}

const styles = StyleSheet.create({  
    postView:{
        flex:1,
    }
})

export default CreatePostScreen;