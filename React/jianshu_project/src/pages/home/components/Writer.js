import React,{ PureComponent } from 'react'
import {WriterWrapper,WriterItem,WriterInfo} from '../style'
import {connect} from 'react-redux'


class Writers extends PureComponent{
    render(){
        const { writerList} = this.props;
        return (
            <WriterWrapper>
                {writerList.map((item)=>{
                    return (
                        <WriterItem key={item.get("id")}>
                            <img className="writer-img" alt="" src={item.get("imgUrl")}/>
                            <WriterInfo>
                                <h4 className="writer-title">
                                    <span>{item.get("author")}</span>
                                    <span className="writer-focus">+关注</span>
                                </h4>
                                <p className="writer-desc">{item.get("desc")}</p>
                            </WriterInfo>
                    </WriterItem>
                    )
                })}
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state)=>({
    writerList: state.getIn(["home","writerList"])
})

export default connect(mapStateToProps,null)(Writers);