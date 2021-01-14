import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const {Header} = Layout;
class Headers extends React.Component {
    render(){
        return (
            <Header className='page-header'>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" className='menuwrapper'>
                    <Menu.Item key="1">
                    <Link to='/pgs/dashboard'>pgs</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                    <Link to='/pgd/dashboard'>pgd</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                    <Link to='/azf/dashboard'>azf</Link>
                    </Menu.Item>
                </Menu>
            </Header>  
        )
    }
   
}

export default Headers;
