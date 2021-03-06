import React from 'react'
import {View , StyleSheet , Image} from 'react-native'
import {Avatar , Text , Button} from 'react-native-elements'
import Colors from '../../constants/Colors'
import { Entypo,AntDesign } from '@expo/vector-icons';

const Profile = (props: any) => {
    return (

        <View style={styles.profileMainView}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignSelf: 'flex-start' }}>
                <Avatar
                    rounded
                    size='large'
                    source={require('../../assets/drab.jpg')}
                    onPress={() => console.log("Works!")}
                    //activeOpacity={0.7}
                    avatarStyle={styles.avastyle}
                >
                    <Avatar.Accessory />
                </Avatar>
                <View style={{ flexDirection: 'column' }}>

                    <Text style={styles.tabstyle}>7</Text>
                    <Text style={styles.tabstyle}>Courses</Text>

                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.tabstyle}>0</Text>
                    <Text style={styles.tabstyle}>Questions</Text>

                </View>
            </View>

            <Text style={styles.bioStyle}>Worked at KFUPM {"\n"}

            Studied at King Fahd University of Petroleum and Minerals {"\n"}

            Studied at An-Najah National University {"\n"}

Went to Beit Lied {"\n"}
worked at  NNU {"\n"}
since 2020

</Text>
            <View style={{ marginTop: 8 }}>
                <Button
                    //containerStyle={{ marginRight: 10 }}
                    buttonStyle={{ width: 397, height: 35, borderColor:Colors.cadetblue, marginLeft:5, marginRight:5 }}
                    type='outline'
                    //icon={<Entypo name="new-message" style={{ marginRight: 5 }} size={20} color={Colors.grey} />}
                    title='Edit profile'
                    titleStyle={{ color:'black', fontSize:15, alignSelf:'center' }}
                   // onPress={props.onCreatePost}
                    onPress={() => this.props.navigation.navigate('Profile')}  
                />

            </View>
        </View>

    )

    /*return(
        <View style={styles.profileMainView}>
            <Avatar
            rounded
            size='large'
            source={require('../../assets/abdallah.jpg')}
            >
                <Avatar.Accessory/>
            </Avatar>

            <Text h4 h4Style={styles.nameStyle}>Abdallah Dereia</Text>
            <Text style={styles.bioStyle}>Computer Engineer,NNU</Text>
            <View style={{flexDirection:'row',marginTop:5}}>
                <Button
                containerStyle={{marginRight:20}}
                type='outline' 
                icon={<Entypo name="new-message" style={{marginRight:5}} size={20} color={Colors.grey} />}
                title='New post'
                titleStyle={{color:Colors.primary}}
                onPress={props.onCreatePost}
                />
                  <Button
                type='outline' 
                icon={<AntDesign name="edit" style={{marginRight:5}} size={20} color={Colors.grey} />}
                title='Edit profile'
                titleStyle={{color:Colors.primary}}
                onPress={()=>{}}
                />
            </View>
        </View>
    )*/
}

const styles = StyleSheet.create({/*
    profileMainView:{
        backgroundColor: '#fff',
        alignItems:'center',
        paddingTop:10
    },
    nameStyle:{
        
    },
    bioStyle:{
        color: Colors.grey,
        fontWeight:'bold'
    },
    followersStyle:{
        color:Colors.grey,
        fontWeight:'bold'
    }*/
    avastyle: {
        paddingLeft: 5,
        paddingTop: 2,



    },
    profileMainView: {
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: 5,
        paddingTop: 7,
        height: 250,

    },
    nameStyle: {
        paddingTop: 5,
        fontFamily: "SFUIDisplay-Semibold",
        fontWeight: 'normal',
        fontSize: 18

    },
    bioStyle: {
        color: Colors.darkg,
        fontWeight: 'normal',
        paddingLeft: 5,
        paddingTop: 10
    },
    followersStyle: {
        color: Colors.grey,
        fontWeight: 'bold'
    },
    tabstyle: {
        // paddingRight:,
        //marginTop:24
        paddingTop: 5,
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
        fontSize: 16,
        marginLeft: 60,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'


    },
    tab2style: {
        paddingRight: 18,
        paddingTop: 10,
        //fontFamily: 'sans-serif',
        fontWeight: 'normal',
        fontSize: 15,
        marginLeft: 50,
        alignContent: 'center',
        alignItems: 'center'
    },
    butstyle: {
        width: 100,


    },
})

export default Profile;