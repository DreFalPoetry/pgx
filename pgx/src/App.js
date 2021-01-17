import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch, Redirect } from 'react-router-dom'; //引入路由模块
import '@/styles/common.less';
import BasicLayout from './components/BasicLayout';
import PgtDashboard from './pages/PgtDashboard';
import PgtReport from './pages/PgtReport';
import PgtDataManage from './pages/PgtDataManage';
import Login from './pages/Login';
import Apps from './pages/Apps';
import Pgs from './pages/Apps/pgs';
import Pgd from './pages/Apps/pgd';
import Azf from './pages/Apps/azf';

function App() {
  return (
    <Router >
      <Switch>
        <Route component={Login} path="/login"/>
        <Route component={Apps} path="/apps"/>
        <Route component={Pgs}
          path="/pgs/entrance"
        />
        <Route
          component={Pgd}
          path="/pgd/entrance"
        />
        <Route component={Azf} path="/azf/entrance"/>
        {/* <Route path="/pgs/dashboard" component={BasicLayout}></Route>   */}
        <Route path="/"
          render={()=>(
            <BasicLayout>
              <Switch>
                <Route exact path="/"
                  render={()=> (
                    <Redirect to="/apps"/>
                  )}
                />
                <Route component={PgtDashboard} exact path="/pgt-a/dashboard"></Route>
                <Route component={PgtReport} exact path="/pgt-a/report"></Route>
                <Route component={PgtDataManage} exact path="/pgt-a/data_manage"></Route>
              </Switch>
            </BasicLayout>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}
export default App;
