import React, { Fragment } from 'react';
import {Row,Col,Icon} from 'antd';
import TableContent from './table';
import {getStatic} from '@/request/api';
import styles from './index.module.less';
class PgsDashboard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:{}
    };
  }
  componentDidMount(){
    getStatic().then(res=>{
      this.setState({
        data:res.data
      });
    });
  }
  render(){
    const {data}=this.state;
    return (
      <Fragment>
        <div className={styles.wrapper}>
          <div className={styles.dashboardWrapper}>
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <div className={styles.moneyWrapper}>
                  <Icon className={styles.icon} type="money-collect" />
                  <div className={styles.textwrapper}>
                    <span>当天 PGT-A 待分析数量</span>
                    <span>{data.pgtWaitNums}万元</span>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className={styles.moneyWrapper}>
                  <Icon className={styles.icon} type="money-collect" />
                  <div className={styles.textwrapper}>
                    <span>当天 PGT-A 报告数量</span>
                    <span>{data.pgtReportDayNums}万元</span>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className={styles.moneyWrapper}>
                  <Icon className={styles.icon} type="money-collect" />
                  <div className={styles.textwrapper}>
                    <span>当月PGT-A报告数量</span>
                    <span>{data.pgtReportMonthNums}万元</span>
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className={styles.moneyWrapper}>
                  <Icon className={styles.icon} type="money-collect" />
                  <div className={styles.textwrapper}>
                    <span>本年度PGT-A报告数量</span>
                    <span>{data.pgtReportYearNums}万元</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.tableWrapper}>
            <h2 className={styles.subTitle}>最新报告</h2>
            <TableContent/>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PgsDashboard;
