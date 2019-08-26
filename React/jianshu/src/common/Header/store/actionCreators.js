import {SEARCH_FOCUS,SEARCH_BLUR,GET_SEARCH_LIST,MOUSE_ENTER,MOUSE_LEAVE,CHANGE_PAGE} from './constans'
import axios from 'axios'
import { fromJS } from 'immutable'

const getAjax = (data)=>({
    type:GET_SEARCH_LIST,
    data:fromJS(data),
    totalPage : Math.ceil(data.length/10)
})

export const SearchFocus = ()=>({
    type: SEARCH_FOCUS
});

export const SearchBlur = ()=>({
    type: SEARCH_BLUR
})

export const changeMouseEnter = ()=>({
    type: MOUSE_ENTER
})

export const changeMouseLeave = ()=>({
    type : MOUSE_LEAVE
})

export const changePage= (page)=>({
    type: CHANGE_PAGE,
    page
})

export const getSearchList= ()=>{
    return (dispatch)=>{
        axios.get("/api/searchList.json").then((res)=>{
            const data = res.data;
            const action = getAjax(data.data)
            dispatch(action)
        })
    }
}