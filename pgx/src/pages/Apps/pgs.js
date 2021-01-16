import React from 'react';
import dashboard from './dashboard.c6425961.svg';
class Pgs extends React.Component{
  render(){
    return (
      <div className="login-back">
        <div className="page-front-login-sp">
          <h1 className="logo-img">PGC CLOUD</h1>
          <h2 className="logo-user">欢迎您，<span className="logo-username">测试账号</span></h2>
          <div className="ant-row entrance-container">
            <div className="entrance-wrapper">
              <h3><i className="dna-icon"></i>快速上传通道<i className="dna-icon"></i></h3>
              <p className="sc-caSCKo kMSsFT">Miseq-gDNA</p>
              <p className="sc-caSCKo kMSsFT">Miseq-PGS-MDA</p>
              <p className="sc-caSCKo kMSsFT">Miseq-PGS-READseqV2.0</p>
              <p className="sc-caSCKo kMSsFT">Miseq-PGS-SUREPLEX</p>
              <p className="sc-caSCKo kMSsFT">NextSeq-PGS(1M)-MDA</p>
              <p className="sc-caSCKo kMSsFT">NextSeq-PGS-MDA</p>
              <p className="sc-caSCKo kMSsFT">NextSeq-PGS-SUREPLEX</p>
              <p className="sc-caSCKo kMSsFT">PGM-Amp</p>
              <p className="sc-caSCKo kMSsFT">PGM-gDNA</p>
              <p className="sc-caSCKo kMSsFT">PGM-PGS-MDA</p>
              <p className="sc-caSCKo kMSsFT">PGM-PGS-SUREPLEX</p>
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

export default Pgs;
