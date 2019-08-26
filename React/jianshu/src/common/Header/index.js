import React,{ Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchBox,
    SearchHeader,
    SearchTitle,
    SearchList,
    SearchItem
}from './style'
import {actionCreators} from './store'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import {actionCreators as LoginActionCreators} from '../../pages/login/store'

class Header extends  Component{
    render(){
        const {focused,list,handleInputFocus,handleInputBlur,login,logout} = this.props;
        return(
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {login ? <NavItem className="right" onClick={logout}>退出</NavItem>:<Link to="/login"><NavItem className="right" >登陆</NavItem></Link>}
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={500} in={focused} classNames="slide"> 
                            <NavSearch className={focused ? "focused" : "" }
                                onFocus={()=>{handleInputFocus(list)}}
                                onBlur ={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused? "iconfont focused" : "iconfont"}>&#xe624;</span>
                        {this.getSearchItem()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">
                        <span className="iconfont">&#xe60e;</span>
                            写文章</Button>
                    </Link>
                    <Button className="res">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }    
    getSearchItem(){
        const {focused,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
        const pageItems =[];
        const pageList = list.toJS();

        if(pageList.length){
            for(let i=(page-1)*10;i<page*10;i++){
                pageItems.push(<SearchItem key={pageList[i]}>{pageList[i]}</SearchItem>)
            }
        }

        if(focused || mouseIn){
            return (
                <SearchBox  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchHeader>
                        热门搜索
                        <SearchTitle onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
                            <span className="iconfont" ref={(icon)=>{this.spinIcon = icon}}>&#xe606;</span>
                            换一批</SearchTitle>
                    </SearchHeader>
                    <SearchList>
                        {pageItems.map((item)=>{
                            return item;
                        })}
                        {/* {pageItems} */}
                    </SearchList>
                </SearchBox>
            )
        }
        else{
            return null;
        }
    }    
}

const mapStateToProps = (state)=>{
    return {
        // focused : state.header.focused
        // focused: state.get("header").get("focused")
        focused: state.getIn(["header","focused"]),
        list: state.getIn(["header","list"]),
        page: state.getIn(["header","page"]),
        totalPage: state.getIn(["header","totalPage"]),
        mouseIn : state.getIn(["header","mouseIn"]),
        login: state.getIn(["login","login"])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(list){
            // const action = {
            //     type:"handle_focus"
            // }
            if(list.size===0){
                dispatch(actionCreators.getSearchList())
            }
            dispatch(actionCreators.SearchFocus())
        },
        handleInputBlur(){
            // const action = {
            //     type: "handle_blur"
            // }
            dispatch(actionCreators.SearchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.changeMouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.changeMouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,"");
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }
            else{
                originAngle =0;
            }
            spin.style.transform =`rotate(${originAngle+360}deg)`;
            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1))
            }
            else{
                dispatch(actionCreators.changePage(1))
            }
        },
        logout(){
            dispatch(LoginActionCreators.changeLogout())
        }
    }
   
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);