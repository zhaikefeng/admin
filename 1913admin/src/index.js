import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
// 全局引入样式文件
// import App from './App';
import RootRouter from './router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RootRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
