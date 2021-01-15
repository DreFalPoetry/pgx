import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch, Redirect } from 'react-router-dom'; //引入路由模块
import { Layout,Menu} from 'antd';
import BasicLayout from './components/BasicLayout';
import PgsDashboard from './pages/PgsDashboard'
import PgsReport from './pages/PgsReport'
import PgsDataManage from './pages/PgsDataManage'
import PgsHome from './components/Pgs/Index';
// import Pgd from './components/Pgd/Index';
// import Azf from './components/Azf/Index'
import './App.css'
import Login from './pages/Login';
import Apps from './pages/Apps';
import Pgs from './pages/Apps/pgs';
import Pgd from './pages/Apps/pgd';
import Azf from './pages/Apps/azf';
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Router >
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/apps' component={Apps}/>
        <Route path='/pgs/entrance' component={Pgs}/>
        <Route path='/pgd/entrance' component={Pgd}/>
        <Route path='/azf/entrance' component={Azf}/>
        {/* <Route path="/pgs/dashboard" component={BasicLayout}></Route>   */}
        <Route path="/" render={()=>(
          <BasicLayout>
            <Switch>
              <Route path='/' exact render={()=> (
                <Redirect to='/apps'/>
              )}/>
              <Route path="/pgs/dashboard" exact component={PgsDashboard}></Route>  
              <Route path="/pgs/report" exact component={PgsReport}></Route>  
              <Route path="/pgs/data_manage" exact component={PgsDataManage}></Route>  
            </Switch>
          </BasicLayout>
        )}></Route>
      </Switch>
    </Router> 
  );
}
export default App;
