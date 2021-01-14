import React from 'react'
import { Menu } from 'antd';

export default class SideNav extends React.Component{
  renderMenu=()=>{
    const routerList=this.props.routerList;
   return routerList.map(item=>{
      return  <Menu.Item key={item.key}>{item.title}</Menu.Item>
    })
  }
  render(){
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {
          this.renderMenu()
        }
        {/* <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    )
  }
}