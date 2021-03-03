import React from 'react'
import {View , Text , StyleSheet , ScrollView} from 'react-native'
import GroupHeader from '../components/GroupHeader'
import WritePost from '../components/WritePost'
import PostItem from '../components/PostItem'
import PostFooter from '../components/PostFooter'
const GroupScreen = (props: any) => {
    const title = props.route.params.title
    return(
        <ScrollView contentContainerStyle={styles.groupMainView}>
            <GroupHeader title={title}/>
            <WritePost onTouch={()=>props.navigation.navigate('Create Post')} />   
            <PostItem 
            onSelect={()=>props.navigation.navigate('Full Post')}
            >
            <PostFooter/>
            </PostItem>
           
           

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    groupMainView: {
        backgroundColor:'#ccc'
    }
})

export default GroupScreen