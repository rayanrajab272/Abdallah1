import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import StudentProfileScreen from '../screens/StudentProfileScreen'
import FeedScreen from '../screens/FeedScreen'
import NotificationsScreen from '../screens/NotificationsScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons, AntDesign , MaterialCommunityIcons, Entypo  } from '@expo/vector-icons';
import GroupScreen from '../screens/GroupScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Material from '../screens/Material'
import Colors from '../../constants/Colors'
import ShareThingsScreen from '../screens/ShareThingsScreen'
import CreatePostScreen from '../screens/CreatePostScreen'
import FullPostScreen from '../screens/FullPostScreen'
import CustomHeaderButton from '../components/UI/CustomHeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import DepartmentQuestionsScreen from '../screens/DepartmentQuestionsScreen'
import UniversityQuestionsScreen from '../screens/UniversityQuestionsScreen'

const BottomTabs = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export const DrawerNavigator = (props: any) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={BottomTabNavigator} />
                <Drawer.Screen name='Settings' component={ShareThingsScreen} />
                {/* <Drawer.Screen name='tab' component={BottomTabNavigator} /> */}
            </Drawer.Navigator>
        </NavigationContainer>

    )
}



const BottomTabNavigator = (props: any) => {
    return (

        <BottomTabs.Navigator shifting={true} barStyle={{ backgroundColor: Colors.bluetwo }}>

            <BottomTabs.Screen
                name='Feed'
                component={FeedNavigator}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="home" size={20} color="white" />
                    )
                }}
            />

            <BottomTabs.Screen
                name='Notifications'
                component={NotificationsNavigator}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="notifications-sharp" size={20} color='white' />),
                    tabBarBadge: 5


                }}
            />
            <BottomTabs.Screen
                name='University'
                component={UniversityQuestionsNavigator}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="frequently-asked-questions" size={20} color="white" />
                    )
                }}
            />

            <BottomTabs.Screen
                name='Department'
                component={DepartmentQuestionsNavigator}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="account-question" size={20} color="white" />
                    )
                }}
            />

            <BottomTabs.Screen
                name='Profile'
                component={StudentProfileNavigator}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="user" size={20} color='white' />
                    )
                }}
            />
        </BottomTabs.Navigator>

    )
}


const StudentProfileNavigator = (props: any) => {
    return (
        
        < Stack.Navigator
        /*
            screenOptions={{
                headerTitleStyle: { color: '#fff' },
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: Colors.blue5
                }

            }
            }
        */
            screenOptions={{
                headerTitleStyle: { color: '#fff', fontFamily: 'sans-serif', fontSize: 16 },
                headerTitleAlign: 'left',
                headerStyle: {
                    backgroundColor: Colors.bluetwo
                }}}
        
        >
        
            <Stack.Screen
                options={{ title: 'Profile' }}
               // name='StudentProfile'
               name= 'Abdallah Hasan Rashed'
                component={StudentProfileScreen}
                options={{
                    headerRight: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item
                                title='Post'
                               // iconName='md-list'
                               iconName= 'list'
                                onPress={() => {
                                    props.navigation.toggleDrawer()
                                }}
                            />
                        </HeaderButtons>
                    }
                }}
            />
            
            <Stack.Screen
                options={{ title: 'Group' }}
                name='Group'
                component={GroupScreen}
            />
            <Stack.Screen
                name='Material'
                component={Material}
            />
            <Stack.Screen
                name='Create Post'
            
                component={CreatePostScreen}
                options={{
                    headerRight: () => {
                        return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item
                                title='Post'
                                buttonStyle={{
                                    //backgroundColor: 'white',
                                    padding: 10,
                                    color: '#fff',
                                    //borderRadius: 10,

                                }}
                                color='#fff'
                                onPress={() => { }}
                            />
                        </HeaderButtons>
                    }
                }}
            />

            <Stack.Screen
                name='Full Post'
                component={FullPostScreen}
            />
        </Stack.Navigator>
    )
}

const FeedNavigator = (props: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Feed'
                component={FeedScreen}
            />
        </Stack.Navigator>
    )
}

const NotificationsNavigator = (props: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Notifications'
                component={NotificationsScreen}
            />
        </Stack.Navigator>
    )
}

const DepartmentQuestionsNavigator = (props:any) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='DepartmentQuestions' 
            component={DepartmentQuestionsScreen}
            />
        </Stack.Navigator>
    )
}


const UniversityQuestionsNavigator = (props:any) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='UniversityQuestions' 
            component={UniversityQuestionsScreen}
            />
        </Stack.Navigator>
    )
}


export default DrawerNavigator;