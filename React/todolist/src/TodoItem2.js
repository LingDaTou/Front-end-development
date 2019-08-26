import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem2 extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }
    render(){
        const {content,name} = this.props;
        return (
            <div onClick={this.handleDelete}>{name}-{content}</div>
        )
    }
    handleDelete(){
        const {index,itemDelete} = this.props;
        itemDelete(index);
    }
}

TodoItem2.propTypes ={
    content:PropTypes.string.isRequired,
    index:PropTypes.number,
    itemDelete:PropTypes.func,
    // name:PropTypes.string
}
TodoItem2.defaultProps={
    name:"hi"
}
export default TodoItem2;