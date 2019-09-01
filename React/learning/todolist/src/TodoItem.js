import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }
    render(){
        const {content,name} = this.props;
        return (
            <div onClick={this.handleItemDelete}
            >{name}-{content}</div>
        )
    }
    handleItemDelete(){
        const {itemDelete,index} = this.props;
        itemDelete(index);
        // this.props.itemDelete(index)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }
        else return false;
    }
}

TodoItem.propTypes ={
    name:PropTypes.string.isRequired,
    content:PropTypes.string,
    itemDelete:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps = {
    name:"hello world"
}

export default TodoItem;