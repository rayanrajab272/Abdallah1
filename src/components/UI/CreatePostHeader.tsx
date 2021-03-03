import { registerRootComponent } from 'expo'
import React from 'react'
import { View, Text, StyleSheet, Image , TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import ProfileImageName from './ProfileImageName'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors'
import ItemFooter from '../ItemFooter'

const CreatePostHeader = (props: any) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.headerView}>
                <ProfileImageName/>
                </View>

            <TextInput
            placeholder='Create new post..'
            style={styles.postInput}
            multiline={true}
            returnKeyType='next'
            
            />
         <View style={styles.addstyle}>
<View style={styles.add2style}>
            <Text style={{fontSize:18, color:'black', fontWeight:'130' }}> Add to your Post</Text>
            <Button
                type='clear'
                buttonStyle={{ flexDirection: 'row' , marginLeft:180, alignSelf:'center'}}
                icon={<MaterialIcons name="photo-library" size={20} color='#999' />}
                title='Photo'
                titleStyle={{ fontSize: 15 , padding:5,}}
            />
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    add2style:{
        marginTop:10,
        flexDirection:'row'

    },
    addstyle:{
        borderTopWidth:0.5,
       borderRadius:10,
        flexDirection:'row',
        marginTop:10,
        borderColor:Colors.blue1,



    },
    mainView:{
        flex:1,
        backgroundColor:'#fff',
        //height:300,
    },
    headerView: {
      //  flexDirection: 'row',
        //justifyContent: 'space-between',
       //alignItems: 'center',
        width: '100%'
    },
    infoView: {
     //   flexDirection: 'row',
     //   alignItems: 'center',
        padding: 10
    },

    postInput:{
        padding: 10,
        fontSize:18,
        backgroundColor:'#fff',
        height:140
    }
})

export default CreatePostHeader;