import React from 'react'
import {BrowserRouter as Router,Route,Link,withRouter} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import router from '../../router/pgs/router';
import PgsDashboard from '../../pages/PgsDashboard';
import PgsDataManage from '../../pages/PgsDataManage'
import PgsDataStatistics from '../../pages/PgsDataStatistics'
import PgsRecycleBin from '../../pages/PgsEcycleBin'
import PgsReport from '../../pages/PgsReport'
import PgsStatistics from '../../pages/PgsStatistics'
import Headers from '../../components/Header'
import './Index.css'
const { SubMenu } = Menu;
const {  Content, Sider } = Layout;
class PgsHome extends React.Component {
    constructor(props){
        super(props)
        this.state={
            path:'/pgs/dashboard'
        }
    }
    componentDidMount(){
        // console.log(this.props)
    }
    selected=({ item, key, keyPath, domEvent })=>{
       console.log(this.props)
        this.setState({
            path:keyPath
        })
    }
    render(){
      
        return (
            <Router>
                <Layout>
                    
                    <Layout className='content'>
                        <Sider  className='siderwrapper'>
                        <Menu theme="dark" mode="inline" selectedKeys={this.state.path} >
                            {router&&router.map(item=>{
                                return <Menu.Item key={item.key} onClick={this.selected}>
                                            <Link  to={item.key} >
                                                    <Icon type={item.icon} />
                                                    {item.title}
                                            </Link>
                                        </Menu.Item>
                            })}
                        </Menu>
                            
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>    
                            <Content className='contentWrapper'>
                                <Route path='/pgs/dashboard' component={PgsDashboard} exact/>
                                <Route path='/pgs/report' component={PgsReport} />
                                <Route path='/pgs/data_manage' component={PgsDataManage} />
                                <Route path='/pgs/statistics' component={PgsStatistics} />
                                <Route path='/pgs/data_statistics' component={PgsDataStatistics} />
                                <Route path='/pgs/recycle_bin' component={PgsRecycleBin} />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        )
    }
   
}

export default withRouter(PgsHome)  
