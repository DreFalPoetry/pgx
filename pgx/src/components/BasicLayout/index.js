import React from 'react';
import { withRouter } from 'react-router-dom';
import {getSysData} from '@/request/api';
import { setGlobalData } from '@/store/actions';
import { Layout, Menu, Breadcrumb, Button,Avatar, Dropdown,Icon } from 'antd';
import SideNav from '../Nav/SideNav';
import TopNav from '../Nav/TopNav';
import BasicRouter from '@/router/router';
import adminRouter from '@/router/adminRouter';
import { connect } from 'react-redux';
import './index.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

@connect((state) => {
  return {
    globalData : state.global.globalData
  };
})
class BasicLayout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mainMenuKey:'',
      sideMenuArr:[],
      curKey: '',
      title:''
    };
  }

  componentDidMount(){
    getSysData().then(res=>{
      // 先模拟写用户类型 管理员1 普通用户2
      res.data.userType = 2;
      this.props.dispatch(setGlobalData(res.data));
    });

    const currentPath = this.props.location.pathname;
    const _currentMainMenu = '/' + currentPath.split('/').filter(v=>v)[0];
    this.setCurrentMenu(_currentMainMenu);

    BasicRouter.map(item=>{
      item.children&&item.children.map(item=>{
        if(item.key==currentPath){
          this.setState({
            title:item.title
          });
        }
      });
    });
  }

  changeSideMenu = (curNav) => {
    this.setCurrentMenu(curNav);
    this.props.history.push(curNav + '/dashboard');
  }

  setCurrentMenu = (curNav) => {
    let _currentSideMenu = [];
    BasicRouter.map(v=>{
      if(v.key == curNav){
        _currentSideMenu = v.children;

      }
    });
    this.setState({
      mainMenuKey: curNav,
      sideMenuArr: _currentSideMenu,
      curKey:curNav+new Date().getTime()
    });
  }
  // 获取面包屑
  onSelected=(val)=>{
    this.setState({
      title:val
    });
  }
  clickMenu = () => {

  }
  render(){
    const  {mainMenuKey, sideMenuArr,curKey,title} = this.state;
    console.log('basic data:', this.props.globalData);
    const { userType } = this.props.globalData;
    const menu = (
      <Menu onClick={this.clickMenu}>
        <Menu.Item key="1">账户信息</Menu.Item>
        <Menu.Item key="2">修改密码</Menu.Item>
        <Menu.Item key="3">退出登录</Menu.Item>
      </Menu>
    );
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          {
            userType == 2 ? (
              <TopNav
                changeSideMenu={this.changeSideMenu}
                currentMenu={mainMenuKey}
                key={curKey}
                onSelected={this.onSelected}
                routerList={BasicRouter}
              />
            ) : <div style={{flex:1}}></div>
          }
          <ul className="header-global-info">
            <li>生信版本</li>
            <li>
              <Dropdown overlay={menu}>
                <div>
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <span>测试账号 <Icon type="down" /></span>
                </div>
              </Dropdown>
            </li>
          </ul>
        </Header>
        <Layout>
          {
            userType ? (
              <Sider
                className="page-sidebar"
                width={80}
              >
                <SideNav
                  key={curKey}
                  onSelected={this.onSelected}
                  routerList={userType == 1 ? adminRouter : sideMenuArr}
                />
              </Sider>
            ) : null
          }
          <Layout style={{background:'#efefef'}}>
            <Content
              className="page-wrapper"
            >
              <Breadcrumb style={{ marginBottom: '12px' }}>
                <Breadcrumb.Item>{title}</Breadcrumb.Item>
              </Breadcrumb>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default  withRouter(BasicLayout);