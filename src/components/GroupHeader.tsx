import React from 'react'
import {View , Text , StyleSheet , ScrollView, ImageBackground} from 'react-native'
import Colors from '../../constants/Colors'
const GroupHeader = (props: any) => {
    return(
        <View style={styles.headerMainView}>
            <View>
                <ImageBackground
                source={require('../../assets/1.png')}
                style={styles.backgroundImage}
                />
            </View>
            <View style={styles.groupInfo}>
                <Text style={styles.groupTitle}>{props.title}</Text>
                <Text style={styles.membersCount}>44 members</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerMainView:{
        width:'100%'
    },
    backgroundImage: {
       width:'100%',
       aspectRatio: 2 / 1
    },
    groupInfo:{
        backgroundColor:'white',
        height:100,
        padding:10
    },
    groupTitle:{
        fontWeight:'bold',
        fontSize:30,
        color: Colors.blue1
    },
    membersCount:{
        fontSize:12,
        color:Colors.darkg
    }
})

export default GroupHeader;