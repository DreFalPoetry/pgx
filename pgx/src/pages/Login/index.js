import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.css'

class Login extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login-back'>
                <div className='login-container'>
                    <h1 className='logo-img'>PGX CLOUD</h1>
                    <section>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入你的用户名' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入你的用户名！"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入你的密码!' }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请输入你的密码!"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                          
                           
                            </Form.Item>
                        </Form>
                    </section>
                </div>
            </div>
        )
    }
   
}

export default Form.create()(Login);
