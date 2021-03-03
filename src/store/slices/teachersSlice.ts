import {createSlice} from '@reduxjs/toolkit'
import store from '../store'
const studentSlice = createSlice({
    name:'student',
    initialState:{
        name:'',
        email:'',
        department:'',
        courses:[],
        groups:[],
        questions:[],
        posts:[],
        followers:[],
        following:[],
        profilePic:'',
        bio:'',
        settings:[]

    },
    reducers:{
      
    }
})
