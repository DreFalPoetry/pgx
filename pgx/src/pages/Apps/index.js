import React from 'react';
import { BrowserRouter as Router, Route,Link, Switch, Redirect } from 'react-router-dom'; //引入路由模块
import {getSysData} from '@/request/api';
import { connect } from 'react-redux';
import { setGlobalData } from '@/store/actions';
import '@/pages/Login/index.css';
import azf from'./azf.06645633.svg';
import pgd from './pgd.cc0e235e.svg';
import pgs from './pgs.0b520ce0.svg';

@connect((state) => {
  return {
    globalData : state.global.globalData
  };
})

class Apps extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount(){
    getSysData().then(res=>{
      this.props.dispatch(setGlobalData(res.data));
    });
  }
  onClick=(type)=>{
    if(type=='pgs'){
      this.props.history.push('/pgs/entrance');
    }else if(type=='pgd'){
      this.props.history.push('/pgd/entrance');
    }else if(type=='azf'){
      this.props.history.push('/azf/entrance');
    }
  }
  render(){
    console.log(this.props.globalData);
    return (
      <Router>
        <div className="login-back">
          <div className="page-front-login-sp">
            <h1 className="logo-img">PGC CLOUD</h1>
            <h2 className="logo-user">欢迎您，<span className="logo-username">测试账号</span></h2>
            <div className="apps-container" >
              <div className="app-card app-pgs"
                onClick={()=>this.onClick('pgs')}
              >
                <img alt="app"
                  className="app-icon"
                  src={pgs}
                />
                <div className="app-name">PGS/gDNA</div>
                <div className="card-shadow pgs"></div>
              </div>
              <div className="app-card app-pgd"
                onClick={()=>this.onClick('pgd')}
              >
                <img alt="app"
                  className="app-icon"
                  src={pgd}
                />
                <div className="app-name">PGD</div><div className="card-shadow pgd"></div>
              </div>
              <div className="app-card app-azf"
                onClick={()=>this.onClick('azf')}
              >
                <img alt="app"
                  className="app-icon"
                  src={azf}
                />
                <div className="app-name">AZF</div><div className="card-shadow azf"></div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }

}

export default Apps;
