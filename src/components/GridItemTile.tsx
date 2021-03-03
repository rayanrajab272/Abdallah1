import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import Colors from '../../constants/Colors'
const GridItemTile = (props) => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version > 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        /**
         * Here The TouchableNativeFeedBack with view because the style is get suck
         * 
         */
        <TouchableCmp activeOpacity={0.7} style={{ flex: 1 }} onPress={props.onSelect}>
            <View style={styles.gridItem}>

                <View key={props.itemData.item.id}>
                    <Text style={styles.text}>{props.itemData.item.name}</Text>
                </View>

            </View>
        </TouchableCmp>

    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 80,
        borderRadius: 9,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff',
        borderColor: Colors.bluetwo,
        borderWidth:1

           },
    text: {
        color: 'black',
        // fontFamily:'open-sans-bold',
        textAlign: 'center',
        fontSize: 16
    }
})

export default GridItemTile;