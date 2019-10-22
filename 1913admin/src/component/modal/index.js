import React,{Component,Fragment} from 'react'
import './index.less'
import {Card} from 'antd'
import {connect} from 'react-redux'
class token extends Component{
  render(){
    console.log(this)
    let {tokenModal}  = this.props
    return(
      <Fragment>
        {!tokenModal||
        <div className="token">
        <Card title="token丢失">
            token丢失或者失效,请重新登录
            <button>去登录</button>
        </Card>
      </div>
        
        }
      
      </Fragment>

    )
  }
}
export default  connect(state=>state)(token)