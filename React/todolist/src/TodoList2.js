import React,{ Component,Fragment } from 'react'
import TodoItem2 from './TodoItem2'

class TodoList2 extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }
    render(){
        return(
            <Fragment>
                <div>
                    <input  value={this.state.inputValue} 
                            onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>点击</button>
                </div>
                <ul>
                    {this.addItem()}
                </ul>
            </Fragment>
        )
    }
    addItem(){
        return this.state.list.map((item,index)=>{
            // return <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>
           return <div key={index}>
               <TodoItem2 content={item} index={index} itemDelete={this.handleItemDelete}/>
                </div>
        })
    }
    handleInputChange(e){
        const value = e.target.value;
        // this.setState({
        //     inputValue: value
        // })

        this.setState(()=>({
            inputValue: value
        }))
    }
    handleBtnClick(){
        // this.setState({
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:''
        // })
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }))
    }
    handleItemDelete(index){
        // const list = [...this.state.list];
        // list.splice(index,1)
        // this.setState({
        //     list:list
        // })
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        })
    }
}

export default TodoList2;