import React from 'react';
import dashboard from './dashboard.c6425961.svg';
import upload from './pgd-upload.9fe2a606.svg';
class Pgd extends React.Component{
  render(){
    return (
      <div className="login-back">
        <div className="page-front-login-sp">
          <h1 className="logo-img">PGC CLOUD</h1>
          <h2 className="logo-user">欢迎您，<span className="logo-username">测试账号</span></h2>
          <div className="ant-row entrance-container">
            <div className="entrance-wrapper">
              <h3><i className="dna-icon"></i>快速上传通道<i className="dna-icon"></i></h3>
              <div className="cursor-p entrance-web pgd">
                <img alt=""
                  src={upload}
                />
                <div className="entrance-text">PGD数据上传</div>
              </div>
              <div className="shadow-way"></div>
            </div>
            <div className="entrance-wrapper">
              <h3><i className="dna-icon"></i>控制台入口<i className="dna-icon"></i></h3>
              <a className="entrance-web"
                href="/pgs/dashboard"
              >
                <img alt=""
                  src={dashboard}
                />
                <div className="entrance-text">点击进入控制台</div>
              </a>
              <div className="shadow-dash"> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Pgd;
