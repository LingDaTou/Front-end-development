import axios from 'axios'
import * as constants from './constants'

const changeLogin = ()=>({
    type: constants.USER_LOGIN,
    value:true
})

export const changeLogout = ()=>({
    type: constants.USER_LOGOUT,
    value: false
})

export const getLogin= (account,password)=>{
    return (dispatch)=>{
        axios.get("/api/login.json?account="+account+"password="+password).then((res)=>{
            let data =res.data.data;
            if(data){
                // 登陆成功
                dispatch(changeLogin())
            }else{
                console.log("登陆失败")
            }
        })
    }
}