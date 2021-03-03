import React, {useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import ItemFooter from './ItemFooter'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const QuestionFooter = (props: any) => {
    return (
        <ItemFooter style={{paddingHorizontal:10}}>
            <QuestionFooterItems/>
        </ItemFooter>
    )
}

const QuestionFooterItems = () => {
    const [goodCounter , setGoodCounter] = useState<number>(0)
    const [badCounter , setBadCounter] = useState<number>(0)
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Button
                    type='clear'
                    title=''
                    icon={<AntDesign name="upcircle" size={20} color={Colors.blue1} />}
                    onPress={()=>setGoodCounter(goodCounter+1)}
                />
                <Text>{goodCounter}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Button
                    title=''
                    type='clear'
                    icon={<AntDesign name="downcircle" size={20} color={Colors.darkg} />}
                    onPress={()=>setBadCounter(badCounter+1)}
                />
                <Text>{badCounter}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Button
                    title=''
                    type='clear'
                    icon={<AntDesign name="frowno" size={20} color={Colors.blue1} />}
                />
               
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Button
                    title=''
                    type='clear'
                    icon={<MaterialCommunityIcons name="human-greeting" size={20} color={Colors.blue1} />}
                />
               
            </View>

        </View>
    )
}

export default QuestionFooter;