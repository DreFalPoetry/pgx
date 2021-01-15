import React from 'react'
import { Menu } from 'antd';

export default class TopNav extends React.Component{
  clickMenu = ({ item, key, keyPath, domEvent }) => {
    this.props.changeSideMenu(key)
  }

  render(){
    const {routerList, currentMenu} = this.props
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        onClick={this.clickMenu}
        defaultSelectedKeys={[currentMenu ? currentMenu : routerList[0].key]}
      >
        {
          routerList.map((menu)=>{
            return (
              <Menu.Item key={menu.key}>{menu.title}</Menu.Item>
            )
          })
        }
      </Menu>
    )
  }
}