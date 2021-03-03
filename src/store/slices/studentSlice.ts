import {createSlice} from '@reduxjs/toolkit'

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
        likedPosts:[],
        profilePic:'',
        bio:'',
        settings:[]

    },
    reducers:{
        
    }
})