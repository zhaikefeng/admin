import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { Menu} from 'antd';
const { SubMenu } = Menu;
let navData=[
  {name:'首页',path:'/admin/home'},
  {name:'设置',path:'/setting'},
  {name:'用户管理',
   path:'/user',
   children:[
     {name:'用户列表',path:'/user/list'},
     {name:'用户删除',
      path:'/user/del',
      children:[
        {name:'用户列表1',path:'/user/list'},
        {name:'用户删除2',path:'/user/del',
        children:[
          {name:'用户列表',path:'/user/list'},
          {name:'用户删除',path:'/user/del'},
        ]
      },
      ]
    }
   ]
  },
]

class Nav extends Component{
  //这里面的递归函数可以学一下
  renderitem =(data)=>{
    return data.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu title={item.name} key={index}>
            {this.renderitem(item.children)}
          </SubMenu>
        )
      } else{
        return (<Menu.Item key={index}>{item.name}</Menu.Item>)
      }
    })
  }
  render(){
    console.log(this,'自定义导航')
    return(
      <div className="nav">
         
          <Menu  style={{ width: 200 }} mode="vertical">
            {/* <Menu.Item>首页</Menu.Item>
            <Menu.Item>设置</Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="1">用户列表</Menu.Item>
              <Menu.Item key="2">用户删除</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>权限管理</span>
                </span>
              }
            >
              <Menu.Item key="3">权限列表</Menu.Item>
              <Menu.Item key="4">权限删除</Menu.Item>
            </SubMenu> */}
            {this.renderitem(navData)}
          </Menu>
      </div>


    )
  }
}
export default  withRouter(Nav)