import React,{ Component } from 'react'
import {
    DetailWrapper,
    DetailHeader,
    DetailContent
}from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'

class Detail extends Component{
    render(){
        const {title,content} = this.props;
        return(
            <DetailWrapper>
                <DetailHeader>{title}</DetailHeader>
                <DetailContent dangerouslySetInnerHTML={{__html:content}}>
                </DetailContent>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetailData(this.props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch)=>({
    getDetailData(id){
        dispatch(actionCreators.getDetail(id))
    }
})

const mapStateToProps = (state)=>({
    title: state.getIn(["detail","title"]),
    content: state.getIn(["detail","content"])
})



export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));