import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Home from '../../pages/Home';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Pgs extends React.Component {
    render(){
        return (
            <Router>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            {/* <Icon type="user" /> */}
                            <Link  to='/all'>
                                    <Icon type="user" />
                                    总览
                                </Link>
                         </Menu.Item>
                        <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                        
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                        >
                            <Route path="/all" component={Home} />
                        </Content>
                    </Layout>
                </Layout>
                
            </Router>
        )
    }
   
}

export default Pgs
