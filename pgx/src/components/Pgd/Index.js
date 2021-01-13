import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import router from '../../router/pgd/router';
import PgsDashboard from '../../pages/PgsDashboard';
import PgsDataManage from '../../pages/PgsDataManage'
import PgsDataStatistics from '../../pages/PgsDataStatistics'
import PgsRecycleBin from '../../pages/PgsEcycleBin'
import PgsReport from '../../pages/PgsReport'
import PgsStatistics from '../../pages/PgsStatistics'
import './Index.css'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Pgd extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    
    render(){
        return (
            <Router>
                <Layout>
                    <Sider width={200} className='siderwrapper'>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/pgd/dashboard']} >
                        {router&&router.map(item=>{
                            return <Menu.Item key={item.key}>
                                        <Link  to={item.key}>
                                                <Icon type={item.icon} />
                                                {item.title}
                                        </Link>
                                    </Menu.Item>
                        })}
                    </Menu>
                        
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className='contentWrapper'>
                            <Route path='/pgd/dashboard' component={PgsDashboard} />
                            <Route path='/pgd/report' component={PgsReport} />
                            <Route path='/pgd/data_manage' component={PgsDataManage} />
                            <Route path='/pgd/statistics' component={PgsStatistics} />
                            <Route path='/pgd/data_statistics' component={PgsDataStatistics} />
                            <Route path='/pgd/recycle_bin' component={PgsRecycleBin} />
                        </Content>
                    </Layout>
                </Layout>
                
            </Router>
        )
    }
   
}

export default Pgd
