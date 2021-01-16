import React from 'react';
import { Menu } from 'antd';
import './index.css';
export default class TopNav extends React.Component{
  clickMenu = ({ item, key, keyPath, domEvent }) => {
    this.props.onSelected('总览');
    this.props.changeSideMenu(key);
  }

  render(){
    const {routerList, currentMenu} = this.props;
    return (
      <Menu
        className="memuwrapper"
        defaultSelectedKeys={[currentMenu ? currentMenu : routerList[0].key]}
        mode="horizontal"
        onClick={this.clickMenu}
      >
        {
          routerList.map((menu)=>{
            return (
              <Menu.Item key={menu.key}>{menu.title}</Menu.Item>
            );
          })
        }
      </Menu>
    );
  }
}