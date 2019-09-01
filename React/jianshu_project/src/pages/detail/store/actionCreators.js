import axios from 'axios'
import * as constants from './constants'


const getDetailAjax=(title,content)=>({
    type: constants.GET_DETAIL_DATA,
    title,
    content
})

export const getDetail =()=>{
    return (dispatch)=>{
        axios.get("/api/detail.json").then((data)=>{
            let res =data.data.data;
            dispatch(getDetailAjax(res.title,res.content))
        })
    }
}