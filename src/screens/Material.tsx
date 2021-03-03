import React from 'react'
import {View , Text , StyleSheet , ScrollView} from 'react-native'
import GroupHeader from '../components/GroupHeader'
import Card from '../components/Card'
const Material = (props:any) => {
    const title = props.route.params.title
    return(
        <ScrollView style={styles.materialMainView}>
           <GroupHeader title={title}/>
           <View style={{padding:20}}>
           <Card title='Group' onSelect={()=>props.navigation.navigate('Group',{title:title})}/>
           <Card title='Chatting Group'/>
           <Card title='Recorded Lectures'/>
           
           </View>
          
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    materialMainView:{
        flex: 1,

    },
   
})

export default Material;