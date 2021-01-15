import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import SideNav from '../Nav/SideNav'
import TopNav from '../Nav/TopNav'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const router = [
  {
    title: 'pgs',
    key: '/pgs',
    children: [
      {
        title: '总览',
        icon: 'bar-chart',
        key: '/pgs/dashboard',
      },
      {
        title: '报告列表',
        icon: 'snippets',
        key: '/pgs/report',
      },
      {
        title: '数据管理',
        icon: 'snippets',
        key: '/pgs/data_manage',
      },
      {
        title: '统计',
        icon: 'dot-chart',
        key: '/pgs/statistics',
      },
      {
        title: '数据回顾',
        icon: 'snippets',
        key: '/pgs/data_statistics',
      },
      {
        title: '回收站',
        icon: 'delete',
        key: '/pgs/recycle_bin',
      }
    ]
  },
  {
    title: 'pgd',
    key: '/pgd',
    children: [
      {
        title: '总览',
        icon: 'bar-chart',
        key: '/pgd/dashboard',
      },
      {
        title: '报告列表',
        icon: 'snippets',
        key: '/pgd/report',
      },
      {
        title: '数据管理',
        icon: 'snippets',
        key: '/pgd/data_manage',
      },
      {
        title: '统计',
        icon: 'dot-chart',
        key: '/pgd/statistics',
      },
      // {
      //   title: '数据回顾',
      //   icon: 'snippets',
      //   key: '/pgd/data_statistics',
      // },
      {
        title: '回收站',
        icon: 'delete',
        key: '/pgd/recycle_bin',
      }
    ]
  },
  {
    title: 'azf',
    key: '/azf',
    children: [
      {
        title: '总览',
        icon: 'bar-chart',
        key: '/azf/dashboard',
      },
      {
        title: '报告列表',
        icon: 'snippets',
        key: '/azf/report',
      },
      {
        title: '数据管理',
        icon: 'snippets',
        key: '/azf/data_manage',
      },
      {
        title: '统计',
        icon: 'dot-chart',
        key: '/azf/statistics',
      },
      // {
      //   title: '数据回顾',
      //   icon: 'snippets',
      //   key: '/azf/data_statistics',
      // },
      {
        title: '回收站',
        icon: 'delete',
        key: '/azf/recycle_bin',
      }
    ]
  },
]

class BasicLayout extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mainMenuKey:'',
      curkey: '',
      sideMenuArr:[]
    }
  }

  componentDidMount(){
    // console.log(this.props.location.pathname)
    const currentPath = this.props.location.pathname
    const _currentMainMenu = '/' + currentPath.split('/').filter(v=>v)[0]
    this.setCurrentMenu(_currentMainMenu)
  }

  changeSideMenu = (curNav) => {
    this.setCurrentMenu(curNav)
    this.props.history.push(curNav + '/dashboard')
  }

  setCurrentMenu = (curNav) => {
    let _currentSideMenu = []
    router.map(v=>{
      if(v.key == curNav){
        _currentSideMenu = v.children
      }
    })
    this.setState({
      mainMenuKey: curNav,
      curkey: curNav + new Date().getTime(),
      sideMenuArr: _currentSideMenu
    })
  }

  render(){
    const  {mainMenuKey, sideMenuArr, curkey} = this.state
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <TopNav 
            key={curkey}
            routerList={router} 
            currentMenu={mainMenuKey}
            changeSideMenu={this.changeSideMenu}
          />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <SideNav 
              routerList={sideMenuArr}  
              key={curkey}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default  withRouter(BasicLayout)