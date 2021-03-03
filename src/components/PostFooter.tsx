import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import Colors from '../../constants/Colors'
import { Foundation, EvilIcons } from '@expo/vector-icons'
import ItemFooter from './ItemFooter'
const PostFooter = (props: any) => {
    return (
        <ItemFooter>
            <PostFooterItems/>
        </ItemFooter>
    )
}

const PostFooterItems = () => {

    return (
        <>
            <Button
                type='clear'
                buttonStyle={{ flexDirection: 'row' }}
                icon={<Foundation name="like" size={20} color='#999' />}
                title='Like'
                titleStyle={{ fontSize: 15, color: Colors.blue1}}
            />
            <Button
                type='clear'
                buttonStyle={{ flexDirection: 'row' }}
                icon={<EvilIcons name="comment" size={20} color="#999" />}
                title='Comment'
                titleStyle={{ fontSize: 15, color: Colors.blue1}}
            />
        </>
    )

}


export default PostFooter;