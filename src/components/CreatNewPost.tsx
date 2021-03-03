import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import Colors from '../../constants/Colors'
import { Foundation, EvilIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons'
import ItemFooter from './ItemFooter'
const CreatNewPost = (props: any) => {
    return (
        <ItemFooter>
            <CreatNewPostItems />
        </ItemFooter>
    )
}

const CreatNewPostItems = () => {

    return (
        <>
            <Button
                type='clear'
                buttonStyle={{ flexDirection: 'row' }}
                icon={<FontAwesome name="pencil-square-o" size={20} color="#999" />}
                title='Status'
                titleStyle={{ fontSize: 15, paddingLeft:5 , color:Colors.blue1}}
            />
            <Button
                type='clear'
                buttonStyle={{ flexDirection: 'row' }}
                icon={<MaterialIcons name="photo-library" size={20} color='#999' />}
                title='Photo'
                titleStyle={{ fontSize: 15, paddingLeft: 5, color: Colors.blue1}}
            />
            
        </>
    )

}


export default CreatNewPost;