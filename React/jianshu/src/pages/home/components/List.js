import React,{ PureComponent } from 'react'
import { ListWrapper,ListItem,ListInfo,LoadMoreList } from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'

class List extends PureComponent{
    render(){
        const {list,handleLoad,articlePage} = this.props;
        return (
           <ListWrapper>
               {list.map((item,index)=>{
                   return (
                    <Link to={'/detail/'+item.get("id")} key={index}>
                        <ListItem>
                            <ListInfo>
                                <h3 className="list-title">{item.get("title")}</h3>
                                <p className="list-desc">{item.get("desc")}</p>
                            </ListInfo>
                            <img className="list-img" alt=" " src={item.get("imgUrl")} />
                        </ListItem>
                    </Link>
                   )
               })}
               <LoadMoreList onClick={()=>handleLoad(articlePage)}>加载更多</LoadMoreList>
           </ListWrapper>
        )
    }
}

const mapStateToProps = (state)=>({
    list: state.getIn(["home","list"]),
    articlePage : state.getIn(["home","articlePage"])
})

const mapDispatchToProps = (dispatch)=>({
    handleLoad(articlePage){
        dispatch(actionCreators.getMoreData(articlePage))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);