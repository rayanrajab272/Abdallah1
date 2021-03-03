import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
const Card = (props: any) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onSelect}>
            <View style={styles.card}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        aspectRatio: 2 / 1,
        backgroundColor: 'red',
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: Colors.pur,
    },
    title: {
        fontSize: 18,
        color: '#fff',
    }
})

export default Card;