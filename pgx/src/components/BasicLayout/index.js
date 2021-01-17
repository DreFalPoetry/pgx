import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import SideNav from '../Nav/SideNav';
import TopNav from '../Nav/TopNav';
import router from '@/router/router';
import './index.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

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
    const currentPath = this.props.location.pathname;
    const _currentMainMenu = '/' + currentPath.split('/').filter(v=>v)[0];
    this.setCurrentMenu(_currentMainMenu);

    router.map(item=>{
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
    router.map(v=>{
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
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <TopNav
            changeSideMenu={this.changeSideMenu}
            currentMenu={mainMenuKey}
            key={curKey}
            onSelected={this.onSelected}
            routerList={router}
          />
        </Header>
        <Layout>
          <Sider
            className="page-sidebar"
            width={80}
          >
            <SideNav
              key={curKey}
              onSelected={this.onSelected}
              routerList={sideMenuArr}
            />
          </Sider>
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