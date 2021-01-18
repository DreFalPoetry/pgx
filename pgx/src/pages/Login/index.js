import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { userLogin } from '@/request/api';
import { setCookie } from '@/request/cookie';
import './index.css';

class Login extends React.Component{
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          userLogin(values).then(res=>{
            console.log(res);
            if(res.data){
              setCookie('token', res.data.token, 7);
              this.props.history.push('/apps');
            }
          });
        }
      });
    };
    render(){
      const { getFieldDecorator } = this.props.form;
      return (
        <div className="login-back">
          <div className="login-container">
            <h1 className="logo-img">PGX CLOUD</h1>
            <section>
              <Form className="login-form"
                onSubmit={this.handleSubmit}
              >
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入你的用户名' }]
                  })(
                    <Input
                      placeholder="请输入你的用户名！"
                      prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} type="user"/>}
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入你的密码!' }]
                  })(
                    <Input
                      placeholder="请输入你的密码!"
                      prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} type="lock"/>}
                      type="password"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Button className="login-form-button"
                    htmlType="submit"
                    type="primary"
                  >登录</Button>
                </Form.Item>
              </Form>
            </section>
          </div>
        </div>
      );
    }
}

const LoginPage = Form.create()(Login);
export default withRouter(LoginPage);
