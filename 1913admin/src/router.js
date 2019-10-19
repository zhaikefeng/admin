import React,{Component} from 'react'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'

import Login from './component/login'
import Admin from './component/admin'
import User from './component/user'
import Home from './component/home'
class RootRouter extends Component{
    render(){
      return(
        <HashRouter>
          {/* 路由渲染   以及导航 */}
        <Switch>
          <Redirect exact from="/" to="/login">  </Redirect>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" render={()=>{
           return(
            <Admin>
              <Route path="/admin/home" component={Home}></Route>
              <Route path="/admin/user" component={User}></Route>
            </Admin>
           )
          }}></Route>

        </Switch>

        </HashRouter>
      )
    }
}
export default RootRouter 