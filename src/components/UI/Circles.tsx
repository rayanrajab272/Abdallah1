import React from 'react'
import {View, StyleSheet} from 'react-native'
import Colors from '../../../constants/Colors';


const Circles = (props: any) => {

    return (
        <View>

            <View style={styles.V1}></View>
            <View style={styles.V2}></View>
            <View style={styles.V3}></View>
            <View style={styles.V4}></View>

        </View>
        

    
    )

}

const styles= StyleSheet.create({
V1:{
        width: 180,
        height: 180,
        borderRadius: 180 / 2,
        backgroundColor: Colors.bb2,
        marginTop:10,
        marginRight:80,
        position:'absolute',
        top: -160, left: 140, right: 20, bottom: 0, justifyContent: 'center', alignItems: 'center'
},
V2:{
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    backgroundColor: Colors.bb2,
    position: 'absolute',
    marginBottom:10,
    marginRight:80,
    top: 340, left: -320, right: -20, bottom: 0, justifyContent: 'center', alignItems: 'center'

},

V3:{
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
    backgroundColor: Colors.blue1,
    position: 'absolute',
    marginTop:180,
    //marginRight:200,
    marginLeft:10,
    top: -280, left: -280, right: -20, bottom: 0, justifyContent: 'center', alignItems: 'center' 
},
V4:
{
        width: 140,
        height: 140,
        borderRadius: 140 / 2,
        backgroundColor: Colors.blue1,
        position: 'absolute',
        //marginBottom:10,
        //marginBottom:-20,
        marginTop:240,
        marginRight:10,
        top: 0, left: 140, right: 20, bottom: 0, justifyContent: 'center', alignItems: 'center'
     }


});

export default Circles;


