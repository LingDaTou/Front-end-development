import React,{ Component,Fragment } from 'react'
import TodoItem from './TodoItem';
import axios from 'axios'
import './style.css'


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:"",
            list:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    render(){
        return(
            <Fragment>
                <div>
                    {/*注释*/}
                    <label htmlFor="inputId">输入信息</label>
                    <input  id="inputId"
                            className="input"
                            value={this.state.inputValue} 
                            onChange={this.handleChange}
                            ref={ (input1)=>{this.inputItem= input1} }
                    />
                    <button onClick={this.handleBtnClick}>点击</button>
                </div>
                <ul>
                    {this.getListItem()}
                </ul>
            </Fragment>
        )
    }
    getListItem(){
       return this.state.list.map((item,index)=>{
            return <div key={index}>
                    <TodoItem content={item} index={index} itemDelete={this.handleDelete}/>
                    {/*<li key={index} 
                    onClick={this.handleDelete.bind(this,index)}
                    dangerouslySetInnerHTML={{__html:item}}
                    >
                </li>*/}
                </div>
        })}
    handleChange(){
        // const value = e.target.value;
        const value = this.inputItem.value;
        this.setState(()=>({
            inputValue: value
        }))

        // this.setState({
        //     inputValue: e.target.value
        // })
    }
    handleBtnClick(){
        // this.setState((prevState)=>({
        //     list:[...prevState.list,prevState.inputValue],
        //     inputValue:''
        // }))
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handleDelete(index){
        // this.setState((prevState)=>{
        //     const list = [...prevState.list];
        //     list.splice(index,1)
        //     return {list}
        // })
        const list = [...this.state.list]
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    componentDidMount(){
        axios.get("/api/todolist")
        .then(()=>{
            console.log("success")
        }).catch(()=>{
            console.log("err")
        })
    }
}

export default TodoList;