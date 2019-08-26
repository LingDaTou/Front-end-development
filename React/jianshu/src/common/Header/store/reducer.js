import * as constans from './constans'
import { fromJS } from 'immutable'

const defaultState =fromJS({
    focused : false,
    list:[],
    mouseIn: false,
    page:1,
    totalPage:1
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case constans.SEARCH_FOCUS:
            return state.set("focused",true)
        case constans.SEARCH_BLUR:
            return state.set("focused",false)
        case constans.GET_SEARCH_LIST:
            // return state.set("list",action.data).set("totalPage",action.totalPage)
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case constans.MOUSE_ENTER:
            return state.set("mouseIn",true)
        case constans.MOUSE_LEAVE:
            return state.set("mouseIn",false)
        case constans.CHANGE_PAGE:
            return state.set("page",action.page)
        default:
            return state;
    }

    // if(action.type===constans.SEARCH_FOCUS){
    //     return state.set("focused",true)
    // }
    // if(action.type===constans.SEARCH_BLUR){
    //     return state.set("focused",false)
    // }
    // if(action.type===constans.GET_SEARCH_LIST){
    //     return state.set("list",action.data)
    // }
    // return state;
}

