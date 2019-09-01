import React,{ PureComponent } from 'react'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style' 
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {connect} from 'react-redux'
import { actionCreators } from './store'

class Home extends PureComponent{
    handleScroll(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt="" src='https://upload.jianshu.io/admin_banners/web_images/4707/589f8bc74616a27b1b3ffaa282210bed81324261.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showTop? <BackTop onClick={this.handleScroll}>回到顶部</BackTop> :null }
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeDate();
        this.bindEvent();
    }
    bindEvent(){
        window.addEventListener("scroll",this.props.showToggle)
    }
}

const mapStateToProps =(state)=>({
    showTop: state.getIn(["home","showTop"])
})

const mapDispatchToProps =(dispatch)=>({
    changeDate(){
        const action=actionCreators.getHomeData();
        dispatch(action);
    },
    showToggle(){
        if(document.documentElement.scrollTop>300){
            dispatch(actionCreators.changeShow(true))
        }
        else{
            dispatch(actionCreators.changeShow(false))
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);