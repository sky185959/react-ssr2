import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


// 热更新container
import {AppContainer} from 'react-hot-loader';
// 路由container
import { BrowserRouter } from 'react-router-dom'
// store container
import { Provider } from 'mobx-react'
// 挂载DOM节点
const DOM = document.getElementById('app')

import BattleState from './store/battle_list'
import CooperationState from './store/cooperation_list'

var InitialState = window.__INITIAL__STATE__ || {};
// render方法
const render = Component => {
    ReactDOM.render(
        <AppContainer >
            <Provider 
                cooperationState={new CooperationState(InitialState.cooperationState)}
                battleState={new BattleState(InitialState.battleState)}>
                <BrowserRouter>   
                    <Component/>
                </BrowserRouter>
            </Provider>
        </AppContainer>
    ,DOM)
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