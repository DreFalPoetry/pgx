import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import './index.less';
class SideNav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menuKey: ''
    };
  }

  componentDidMount(){
    const currentPath = this.props.location.pathname;
    this.setState({
      menuKey: currentPath
    });
  }

  clickMenu = ({ item, key, keyPath, domEvent }) => {

    const _this=this;
    this.props.routerList.map(item=>{

      if(item.key==key){
        _this.props.onSelected(item.title);
      }

    });

    this.setState({
      menuKey: key
    },()=>{
      this.props.history.push(key);
    });
  }
  render(){
    const {routerList} = this.props;
    const {menuKey} = this.state;
    return (
      <Menu
      // className="page-sidebar"
        // mode="inline"
        className="page-sidebar-nav"
        onClick={this.clickMenu}
        selectedKeys={menuKey}
      >
        {
          routerList.map(item=>{
            return (
              <Menu.Item key={item.key}>
                <span className={`sidebar-icon ${item.icon}`} ></span>
                <span className="sidebar-title">{item.title}</span>
              </Menu.Item>
            );
          })
        }
      </Menu>
    );
  }
}

export default withRouter(SideNav);