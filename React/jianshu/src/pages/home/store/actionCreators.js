import axios from 'axios'
import * as constans from './constans'
import {fromJS} from 'immutable'

const changeHomeData = (res)=>({
    type: constans.CHANGE_HOME_DATA,
    topicList:res.topicList,
    list:res.List,
    recommendList:res.recommendList,
    writerList:res.writerList,
})

const changeMoreData = (res,nextPage)=>({
    type: constans.CHANGE_MORE_DATA,
    list: fromJS(res.List),
    nextPage
})

export const getMoreData =(page)=>{
    return (dispatch)=>{
        axios.get('/api/articleList.json?page='+page).then((data)=>{
            let res=data.data.data;
            const action= changeMoreData(res,page+1);
            dispatch(action);
        })
    }
}
export const getHomeData=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((data)=>{
            let res=data.data.data;
            const action=changeHomeData(res)
            dispatch(action);
        })
    }
}

export const changeShow=(show)=>({
    type: constans.CHANGE_SHOW,
    show
})