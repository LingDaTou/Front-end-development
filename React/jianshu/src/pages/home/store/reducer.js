import { fromJS } from 'immutable'
import * as constans from './constans'

const defaultState=fromJS({
    topicList:[],
    list:[],
    recommendList:[],
    writerList:[],
    articlePage:1,
    showTop:true
})

const changeHomeData= (state,action)=>{
    return state.merge({
        topicList: fromJS(action.topicList),
        list: fromJS(action.list),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
    });
}

const addMoreData = (state,action)=>{
    return state.merge({
        list: state.get("list").concat(action.list),
        articlePage: action.nextPage
    });
}


export default (state=defaultState,action)=>{
    switch(action.type){
        case constans.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case constans.CHANGE_MORE_DATA:
            return addMoreData(state,action);
        case constans.CHANGE_SHOW:
            return state.set("showTop",action.show);
        default:
            return state;
    }
}