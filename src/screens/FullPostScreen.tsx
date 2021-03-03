import React from 'react'
import {View , StyleSheet , Text , ScrollView} from 'react-native'
import PostItem from '../components/PostItem'
import CommentItem from '../components/CommentItem'
import PostFooter from '../components/PostFooter'

const FullPostScreen = (props:any) => {
    return(
        <ScrollView style={{flex:1}}>
            <PostItem>
                <PostFooter/>
            </PostItem>
            <View style={styles.commentsView}>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    commentsView: {
        flex:1,
        width:'100%',
        padding:7,
        backgroundColor:'#fff'
    }
})

export default FullPostScreen;