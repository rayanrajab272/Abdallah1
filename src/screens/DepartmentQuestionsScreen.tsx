import React from 'react'
import {View , Text , StyleSheet,ScrollView} from 'react-native'
import PostItem from '../components/PostItem'
import QuestionFooter from '../components/QuestionFooter'
const DepartmentQuestionsScreen = (props: any) => {
    return(
        <ScrollView>
           <PostItem>
                <QuestionFooter/>
           </PostItem>
           <PostItem>
                <QuestionFooter/>
           </PostItem>
           <PostItem>
                
                <QuestionFooter/>
           </PostItem>
           <PostItem>
                <QuestionFooter/>
           </PostItem>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})

export default DepartmentQuestionsScreen;