import React from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'; //引入路由模块

import { Layout,Menu} from 'antd';
import Pgs from './components/Pgs/Index';
import Pgd from './components/Pgd/Index';
import Azf from './components/Azf/Index'
import './App.css'
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header >
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="1">
              <Link to='/pgs'>pgs</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/pgd'>pgd</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='/azf'>azf</Link>
            </Menu.Item>
          </Menu>
        </Header>   
      </Layout>        
        <Route exact path="/pgs" component={Pgs} />
        <Route path="/pgd" component={Pgd} />
        <Route path="/azf" component={Azf} />
     
    </Router>
  );
}
export default App;
