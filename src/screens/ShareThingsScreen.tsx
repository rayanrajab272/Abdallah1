import React from 'react'
import {View , Text , StyleSheet} from 'react-native'


const ShareThingsScreen = (props:any) => {
    return(
        <View style={styles.mainView}>
            <Text>Share things man</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default ShareThingsScreen;