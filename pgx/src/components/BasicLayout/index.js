import React from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import SideNav from '../Nav/SideNav'
import TopNav from '../Nav/TopNav'
import './index.css'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const router = [
  {
    title: 'pgs',
    key: '/pgs',
    children: [
      {
        title: '总览',
        icon: 'sidebar-icon-dashboard',
        key: '/pgs/dashboard',
      },
      {
        title: '报告列表',
        icon: 'sidebar-icon-report',
        key: '/pgs/report',
      },
      {
        title: '数据管理',
        icon: 'sidebar-icon-data_manage',
        key: '/pgs/data_manage',
      },
      {
        title: '统计',
        icon: 'sidebar-icon-statistics',
        key: '/pgs/statistics',
      },
      {
        title: '数据回顾',
        icon: 'sidebar-icon-statistics',
        key: '/pgs/data_statistics',
      },
      {
        title: '回收站',
        icon: 'sidebar-icon-recycle_bin',
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
        icon: 'sidebar-icon-dashboard',
        key: '/pgd/dashboard',
      },
      {
        title: '报告列表',
        icon: 'sidebar-icon-report',
        key: '/pgd/report',
      },
      {
        title: '数据管理',
        icon: 'sidebar-icon-data_manage',
        key: '/pgd/data_manage',
      },
      {
        title: '统计',
        icon: 'sidebar-icon-statistics',
        key: '/pgd/statistics',
      },
      // {
      //   title: '数据回顾',
      //   icon: 'snippets',
      //   key: '/pgd/data_statistics',
      // },
      {
        title: '回收站',
        icon: 'sidebar-icon-recycle_bin',
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
        icon: 'sidebar-icon-dashboard',
        key: '/azf/dashboard',
      },
      {
        title: '报告列表',
        icon: 'sidebar-icon-report',
        key: '/azf/report',
      },
      {
        title: '数据管理',
        icon: 'sidebar-icon-data_manage',
        key: '/azf/data_manage',
      },
      {
        title: '统计',
        icon: 'sidebar-icon-statistics',
        key: '/azf/statistics',
      },
      // {
      //   title: '数据回顾',
      //   icon: 'snippets',
      //   key: '/azf/data_statistics',
      // },
      {
        title: '回收站',
        icon: 'sidebar-icon-recycle_bin',
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
      sideMenuArr:[],
      title:''
    }
  }

  componentDidMount(){
  
    const currentPath = this.props.location.pathname
    const _currentMainMenu = '/' + currentPath.split('/').filter(v=>v)[0]
    this.setCurrentMenu(_currentMainMenu)
   
    router.map(item=>{
      item.children&&item.children.map(item=>{
        if(item.key==currentPath){
          this.setState({
            title:item.title
          })
        }
      })
      
     
    })
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
      sideMenuArr: _currentSideMenu,
      curKey:curNav+new Date().getTime()
    })
  }
// 获取面包屑
  onSelected=(val)=>{
      this.setState({
        title:val
      })
    }
  render(){
    const  {mainMenuKey, sideMenuArr,curKey,title} = this.state
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <TopNav 
            key={curKey}
            routerList={router} 
            currentMenu={mainMenuKey}
            changeSideMenu={this.changeSideMenu}
            onSelected={this.onSelected}
          />
        </Header>
        <Layout>
          <Sider  className="page-sidebar" width={80}>
            <SideNav 
              routerList={sideMenuArr}  
              key={curKey}
              onSelected={this.onSelected}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="page-wrapper"
            >
               <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>{title}</Breadcrumb.Item>
                
            </Breadcrumb>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default  withRouter(BasicLayout)