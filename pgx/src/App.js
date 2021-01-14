import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch, Redirect } from 'react-router-dom'; //引入路由模块
import { Layout,Menu} from 'antd';
import BasicLayout from './components/BasicLayout';
import PgsDashboard from './pages/PgsDashboard'
// import Pgs from './components/Pgs/Index';
// import Pgd from './components/Pgd/Index';
// import Azf from './components/Azf/Index'
import './App.css'
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Router>
      <Route path="/" render={()=>(
        <BasicLayout>
          <Switch>
            <Route path='/' exact render={()=> (
              <Redirect to='/pgs/dashboard'/>
            )}/>
            <Route path="/pgs/dashboard" component={PgsDashboard}></Route>  
          </Switch>
        </BasicLayout>
      )}></Route>
    </Router> 
    // <Router>
    //   <Layout className="layout">
    //     <Header className='page-header'>
    //       <div className="logo" />
    //       <Menu theme="dark" mode="horizontal" className='menuwrapper'>
    //         <Menu.Item key="1">
    //           <Link to='/pgs/dashboard'>pgs</Link>
    //         </Menu.Item>
    //         <Menu.Item key="2">
    //           <Link to='/pgd/dashboard'>pgd</Link>
    //         </Menu.Item>
    //         <Menu.Item key="3">
    //           <Link to='/azf/dashboard'>azf</Link>
    //         </Menu.Item>
    //       </Menu>
    //     </Header>   
    //   </Layout>        
    //     <Route exact path="/pgs/dashboard" component={Pgs} />
    //     <Route path="/pgd/dashboard" component={Pgd} />
    //     <Route path="/azf/dashboard" component={Azf} />
     
    // </Router>
  );
}
export default App;
