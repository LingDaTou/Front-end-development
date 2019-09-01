import React from 'react'
import { Input,Button,List } from 'antd';


// 无状态组件
const TodoListUI =(props)=>{
    return (
        <div style={{marginTop:"10px",marginLeft:"10px"}}>
            <div >
                <Input value={props.inputValue} 
                placeholder="todo list" style={{width:"300px",marginRight:"10px"}}
                onChange={props.handleChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>点击</Button>
            </div>
            <List style={{width:"300px",marginTop:"10px"}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (
                <List.Item onClick={()=>{props.handleDeleteItem(index)}}>
                    {item}
                </List.Item>
            )}/>
        </div>
    )
}

// UI组件
// class TodoListUI extends Component{
//     render(){
//         return (
//             <div style={{marginTop:"10px",marginLeft:"10px"}}>
//                 <div >
//                     <Input value={this.props.inputValue} 
//                     placeholder="todo list" style={{width:"300px",marginRight:"10px"}}
//                     onChange={this.props.handleChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>点击</Button>
//                 </div>
//                 <List style={{width:"300px",marginTop:"10px"}}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item,index) => (
//                     <List.Item onClick={(index)=>{this.props.handleDeleteItem(index)}}>
//                         {item}
//                     </List.Item>
//                 )}/>
//             </div>
//         )
//     }
// }

export default TodoListUI;