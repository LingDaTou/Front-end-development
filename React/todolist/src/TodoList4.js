import React,{ Component } from 'react'
import { connect } from 'react-redux'

const TodoList4= (props)=>{
    const {inputValue,list,handleChange,handleClick} = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={handleChange}/>
                <button onClick={handleClick}>点击</button>
            </div>
            <ul>
                {list.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

// class TodoList4 extends Component{
//     render(){
//         const {inputValue,list,handleChange,handleClick} = this.props;
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={handleChange}/>
//                     <button onClick={handleClick}>点击</button>
//                 </div>
//                 <ul>
//                     {list.map((item,index)=>{
//                         return <li key={index}>{item}</li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }

// TodoList4与store连接: 取数据，store的数据, 可通过props获取
const mapStateToProps = (state)=>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch => props: 改变数据
const mapDispatchToProps = (dispatch)=>{
    return {
        handleChange(e){
            const action ={
                type: "change_input_value",
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick(){
            const action = {
                type: "add_todo_item",
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList4);