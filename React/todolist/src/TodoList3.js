import React ,{ Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import TodoListUI from './TodoListUI'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,initGetList} from './store/actionCreators'
// import axios from 'axios'

class TodoList3 extends Component{
    constructor(props){  
        super(props)
        this.state=store.getState();
        this.handleChange = this.handleChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render(){
        return <TodoListUI inputValue={this.state.inputValue}
                list={this.state.list}
                handleChange={this.handleChange}
                handleBtnClick = {this.handleBtnClick}
                handleDeleteItem ={this.handleDeleteItem}
                />
    }
    componentDidMount(){
        // axios.get("/list.json").then((res)=>{
        //     const data = res.data;
        //     const action = getAjaxList(data);
        //     store.dispatch(action);
        // })

        // ajax模拟: thunk
        // const action = getTodoList();
        // store.dispatch(action);

        // ajax模拟: saga
        const action = initGetList();
        store.dispatch(action)

    }
    handleChange(e){
        const action=getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleBtnClick(){
        const action=getAddItemAction()
        store.dispatch(action)
    }
    handleDeleteItem(index){
        const action =getDeleteItemAction(index)
        store.dispatch(action)
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
}
export default TodoList3;
