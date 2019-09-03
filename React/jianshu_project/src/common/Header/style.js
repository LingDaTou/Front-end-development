import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.div`
    position: absolute;
    width: 100px;
    height:56px;
    top : 0;
    left: 0;
    background: url(${logoPic});
    background-size: cover;
    cursor:pointer;
`
export const Nav = styled.div`
    margin: 0 auto;
    width: 960px;
    padding-right:70px;
    box-sizing:border-box;
    height:56px;
    line-height: 56px;
`
export const NavItem = styled.div`
    margin : 0 15px;
    color:#333;
    cursor:pointer;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color:#969696;
        span{
            font-size: 22px;
        }
    }
    &.active{
        color : #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
    float : left;
    position: relative;
    .slide-enter{
        transition: all .5s;
     }
     .slide-enter-active{
        width:240px;
     }
     .slide-exit{
        transition: all .5s;
     }
     .slide-exit-active{
        width: 160px;
     }
    .iconfont{
        position:absolute;
        top: 12px;
        right:4px;
        line-height:30px;
        text-align:center;
        width:30px;
        height:30px;
        font-weight:bold;
        color:#999;
        border-radius:50%;
        font-size:20px;
        &.focused{
            color: #fff;
            background : #999;
     }
}
`

export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
    border: none;
    outline: none;
    width: 150px;
    height:38px;
    background: #eee;
    border-radius: 19px;
    margin-left:20px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size:15px;
    &::placeholder{
        color :#999;
    }
    &.focused{
        width:240px;
    }
`
export const SearchBox=styled.div`
    position: absolute;
    left:0;
    top:56px;
    width: 250px;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
    box-shadow: 0 0 2px 2px #eee
    box-radius:5px;
`

export const SearchHeader = styled.div`
    font-size: 14px;
    color: #969696;
    height: 20px;
    line-height:20px;
`
export const SearchTitle = styled.div`
    position: relative;
    float: right;
    font-size :13px;
    cursor:pointer;
    .iconfont{
        position: absolute;
        right: 40px;
        top:-3px;
        transition:all .3s;
    }
`

export const SearchList = styled.div`
    padding:10px 5px;
    box-sizing:border-box;
    overflow: hidden;
    color: #777;
    font-size:10px;
`
export const SearchItem = styled.a`
    height: 20px;
    line-height:20px;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;  
    margin-right:10px;  
    margin-bottom: 10px;
    float:left;
`

export const Addition = styled.div`
    position: absolute;
    right: 15px ;
    top : 0;
    bottom:0;
`

export const Button = styled.div`
    float: right;
    margin-top:9px;
    margin-left:20px;
    width: 80px;
    height:38px;
    text-align:center;
    line-height:38px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 19px;
    &.writting{
        color:#fff;
        background : #ea6f5a;
        span{
            display : inline-block;
            margin-right: 5px;
        }
    }
    &.res{
        color: rgba(236,97,73,.7);
    }
`