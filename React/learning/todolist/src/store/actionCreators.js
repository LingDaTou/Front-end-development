
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,REQUEST_AJAX,GET_INIT_LIST} from './actionTypes'

export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = ()=>({
    type:ADD_TODO_ITEM
})

export const getDeleteItemAction = (index)=>({
    type:DELETE_TODO_ITEM,
    index
})

export const getAjaxList = (list)=>({
    type:REQUEST_AJAX,
    list
})

// export const getTodoList = ()=>{
//     return (dispatch)=>{
//         // 模拟ajax异步操作:thunk
//         const dataList = ["hello","react"]
//         const action = getAjaxList(dataList);
//         dispatch(action)
//     }
// }

export const initGetList = ()=>({
    type:GET_INIT_LIST,
})