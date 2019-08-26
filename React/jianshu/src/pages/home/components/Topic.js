import React,{ PureComponent } from 'react'
import { TopicWrapper,TopicItem,TopicInfo } from '../style' 
import { connect} from 'react-redux'

class Topic extends PureComponent{
    render(){
        const {topicList} = this.props;
        return (
            <TopicWrapper>
                {topicList.map((item)=>{
                    return (
                        <TopicItem key={item.get('id')}>
                            <img className="topic-img" alt=""
                            src={item.get('imgUrl')} />
                            <TopicInfo>{item.get('topicDesc')}</TopicInfo>
                        </TopicItem>
                    )
                })}
               
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state)=>({
    topicList: state.getIn(["home","topicList"])
})

export default connect(mapStateToProps,null)(Topic);