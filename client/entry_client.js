import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// 热更新的container
import {AppContainer} from 'react-hot-loader';

// 挂载DOM节点
const DOM = document.getElementById('app')
// render方法
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,DOM)
}
// 渲染
render(App)

// 热更新
if(module.hot){
    module.hot.accept('./App.jsx',()=>{
        // requre引用export出来的内容
        const NextApp = require('./App.jsx').default;
        // 重新渲染
        render(NextApp)
        
    })
}