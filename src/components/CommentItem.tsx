import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { Button } from 'react-native-elements'
import PostHeader from '../components/UI/PostHeader'
import ProfileAvatarImage from './UI/ProfileAvatarImage'

const CommentItem = (props: any) => {
    return (

        <View style={styles.commentView}>
            <ProfileAvatarImage />
            <View style={styles.commentBody}>
                <View style={styles.texts}>
                    <Text style={styles.name}>Abdallah Dereia</Text>
                    <Text>Computer Engineer</Text>
                    <Text>5h</Text>
                </View>
                <View style={styles.commentContentView}>
                    <Text style={styles.commentText}>يرى البعض أن البرمجة معقدة و صعبة و هذا الأمر صحيح مئة في المئة إذا لم تُتقن أساسياتها مثل أي مجال آخر. البيت الذي لا أساس له سيُهدم عاجلاً أو آجلاً بعد معاناة من العيش فيه.

                    🙂‏إذاً من البديهي و الطبيعي هذا التصوّر في بداية دخول الشخص إلى عالم البرمجة و خاصة عند محاولته لفهم لغة برمجية بل و التعمق بها و هو مبتدئ لا يعرف الأساسيات أو كيف يُطوّر و يُنمي مهاراته, و بالتالي من المؤكد أن يواجه الكثير من الصعوبات. </Text>
                </View>

                

            </View>
        </View>



    )
}

const styles = StyleSheet.create({

    commentView: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10
    },
    texts: {
        flexDirection: 'column',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    commentBody: {
        backgroundColor: '#eee',
        width: '80%',
        borderRadius: 15,
        paddingHorizontal: 5,
        borderTopLeftRadius: 0
    },
    commentContentView: {
        padding: 10
    },
    commentText: {
        fontSize: 13,

    }

})

export default CommentItem;