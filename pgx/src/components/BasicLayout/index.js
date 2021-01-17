import React from 'react';
import { withRouter } from 'react-router-dom';
import {getSysData} from '@/request/api';
import { setGlobalData } from '@/store/actions';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
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
      res.data.userType = 1;
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
  render(){
    const  {mainMenuKey, sideMenuArr,curKey,title} = this.state;
    console.log('basic data:', this.props.globalData);
    const { userType } = this.props.globalData;
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
            ) : ''
          }
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