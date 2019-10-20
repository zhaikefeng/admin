import React,{Component} from 'react'
import { Card,Form, Icon, Input, Button, Checkbox,message } from 'antd';
class Login extends Component{
  submit=()=>{
    console.log('数据提交')
    // let result = this.props.form.getFieldsValue()
    // console.log(result)    这个方法是获取表单里面的value值
    this.props.form.validateFields((err,data)=>{
      if(err) {
        message.error('输入信息有误请重试')
      } else {
        message.success('登录成功1s后跳转首页',1,()=>{
          this.props.history.push('/admin')
        })
      }
      console.log(err,data)
    })
  }
  render(){
    console.log(this)
    const { getFieldDecorator } = this.props.form;
    // console.log(getFieldDecorator)
    return(
      <Card style={{width:'400px',position:'fixed',top:'17vh',right:'50px'}}>
         <div className="login-form">
        <Form.Item>
          {getFieldDecorator('us',{
            rules:[{required:true,message:'Please input your username!'},
                    {min:6,message:'用户名6到9位'},
                    {max:9,message:'用户名6到9位'},
              ]
          })(
            <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
          )}
            
        </Form.Item>
        <Form.Item>
            {getFieldDecorator('ps',{
               rules:[{required:true,message:'Please input your username!'}]
            })(
              <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              />
            )}
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" onClick={this.submit} className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </div>
      </Card>
    )
  }
}
export default Form.create({name:'login'})(Login) 