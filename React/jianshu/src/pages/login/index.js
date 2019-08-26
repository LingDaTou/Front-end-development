import React,{ PureComponent} from 'react'
import {LoginWrapper,LoginBox,LoginItem,LoginButton,LoginTitle} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'

class Login extends PureComponent{
    render(){
        const {handleLogin,loginState} = this.props;
        {if(!loginState){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <LoginTitle>登陆</LoginTitle>
                        <LoginItem placeholder="用户名" ref={(input)=>this.account = input}></LoginItem>
                        <LoginItem placeholder="密码" type="password" ref={(input)=>this.password = input}></LoginItem>
                        <LoginButton onClick={()=>handleLogin(this.account,this.password)}>登陆</LoginButton>
                    </LoginBox>
                </LoginWrapper>
            )
        }
        else{
            return <Redirect to="/" />
        }}

    }
}

const mapToStateProps = (state)=>({
    loginState: state.getIn(["login","login"])
})

const mapDispatchToProps = (dispatch)=>({
    handleLogin(accountEle,passwordEle){
        dispatch(actionCreators.getLogin(accountEle.value,passwordEle.value))
    }
})

export default connect(mapToStateProps,mapDispatchToProps)(Login);