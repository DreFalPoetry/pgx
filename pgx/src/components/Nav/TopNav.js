import React from 'react'
import { Menu } from 'antd';

export default class TopNav extends React.Component{
  renderMenu=()=>{
   const routerList=this.props.routerList;
  }
  render(){
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item>
      </Menu>
    )
  }
}