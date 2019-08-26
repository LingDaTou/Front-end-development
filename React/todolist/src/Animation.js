import React,{ Component,Fragment } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import './animationStyle.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      // show:true
      list:[]
    }
    this.handleClick= this.handleClick.bind(this);
  }
  render(){
    return (
      <Fragment>
        <TransitionGroup>
            {this.state.list.map((item,index)=>{
                return (
                  <CSSTransition in={true} classNames="fade" timeout={2000} unmountOnExit
                  onEntered={(ele)=>{ele.style.color="red"}} 
                  appear={true} key={index}
                  >
                <div>{item}</div>
                </CSSTransition>
                )
            })}
        </TransitionGroup>
        <button onClick={this.handleClick}>点击</button>
      </Fragment>
    )
  }
  handleClick(){
    // this.setState({
    //   show:this.state.show===true ? false:true
    // })
    this.setState((prevState)=>{
      return {
        list:[...prevState.list,"item"]
      }
    })
  }
}

export default App;
