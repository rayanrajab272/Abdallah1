import React from 'react'
import {View , StyleSheet , Text, TouchableOpacity} from 'react-native'
import PostHeader from './UI/PostHeader'
import {Button} from 'react-native-elements'
import { Foundation ,EvilIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors'
import PostFooter from './PostFooter';
const PostItem = (props: any) => {
    return(
        <View style={styles.postMainView}>
            <PostHeader/>
            
            <View style={styles.postBody}>
            <TouchableOpacity activeOpacity={0.6} onPress={props.onSelect}>
                <View style={styles.postTextView}>
                    <Text ellipsizeMode='tail' numberOfLines={5} style={styles.postText}>Lorem Ipsum is simply dummy
                    text of the printing and typesetting
                    industry. Lorem Ipsum has been the
                    industry's standard dummy text ever
                    since the 1500s, when an unknown
                    printer took a galley of type and
                    scrambled it to make a type specimen
                    book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem
                    </Text>
                </View>
            </TouchableOpacity>  
               
            {props.children}
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postMainView:{
        width:'100%',
        backgroundColor:'#fff',
        marginVertical:13
    },
    postBottom:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30,
        width:'100%',
        borderTopWidth:1,
        borderColor:'#999'
        
        

    },
    postTextView:{
        padding:10,
    },
    postText:{
        fontSize:14,
        //fontFamily: 'Rubik'
    }
})

export default PostItem;