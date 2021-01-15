import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd';

class SideNav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      menuKey: ''
    }
  }

  componentDidMount(){
    const currentPath = this.props.location.pathname
    this.setState({
      menuKey: currentPath
    })
  }

  clickMenu = ({ item, key, keyPath, domEvent }) => {
    this.setState({
      menuKey: key
    },()=>{
      this.props.history.push(key)
    })
  }
  render(){
    const routerList=this.props.routerList;
    const {menuKey} = this.state
    return (
      <Menu 
        theme="dark" 
        mode="inline" 
        selectedKeys={menuKey} 
        style={{ height: '100%', borderRight: 0 }}
        onClick={this.clickMenu}
      > 
        {
          routerList.map(item=>{
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
          })
        }
      </Menu>
    )
  }
}

export default withRouter(SideNav)