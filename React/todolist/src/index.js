import React from 'react';
import ReactDOM from 'react-dom';
// import Animation from './Animation'
// import TodoList3 from './TodoList3'
// import TodoList from './TodoList';
// import TodoList2 from './TodoList2'
import TodoList4 from './TodoList4'
import { Provider } from 'react-redux'
import store from './store/index2.js'

const App = (
    <Provider store={store}>
        <TodoList4/>
    </Provider>
);

// ReactDOM.render(<TodoList />, document.getElementById('root'));
// ReactDOM.render(<TodoList2/>,document.getElementById('root'));
// ReactDOM.render(<Animation/>,document.getElementById("root"));

ReactDOM.render(App, document.getElementById("root"));

