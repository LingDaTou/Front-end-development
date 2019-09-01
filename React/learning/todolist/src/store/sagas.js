import { put, takeEvery, } from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import {getAjaxList} from './actionCreators'

function* getInitAjax(){
    // const dataList = ["hello","react"]
    // const res = yield dataList;
    // const action = getAjaxList(res);
    // yield put(action)
    try{
        const dataList = ["hello","react"]
        const res = yield dataList;
        const action = getAjaxList(res);
        yield put(action)
    }catch(e){
        console.log(e)
    }
}
 
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitAjax);
  }
  
  export default mySaga;