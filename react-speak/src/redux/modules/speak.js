import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// axios
const instance = axios.create({
    baseURL: "http://54.180.160.43",
    // headers: { authorization: '내 토큰 보내주기' }, // 누가 요청했는지 알려주기
  });

export const addListDB = (content) => {
    return function (dipatch, getState, {history}) {

        instance
        .post("/api/posts", {content: content}) // 미리 약속한 주소, 서버가 필요로 하는 데이터 넘겨주기
        .then((res) => {
            console.log(res)
            dipatch(addList(content))
            history.push("/")
        })
        .catch((err) => {
            console.log(err);
        })
    };
};

export const getListDB = () => {

    return function(dispatch, getState, {history}) {
        instance
        .get('/api/posts/{id}')
        .then((res) => {
            let content_list = res.data.posts
            dispatch(getList(content_list))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

const initialState = {
    list: [],
};

// 리덕스 
const speak = createSlice({
    name: "content",
    initialState,
    reducers: {
        addList: (state, action) => {
            const content = action.payload.content;
            state.list.push({content});
        },

        getList: (state, action) => {
            state.list = action.payload
        },

        deleteList: (state, action) => {
            let idx = state.list.findIndex((r) => r._id === action.payload);
            if(idx !== -1) {
                state.list.splice(idx,1);
            }
        },

        updateList: (state, action) => {},
    }
});

export const { addList, getList, deleteList, updateList } = speak.actions;

export default speak;