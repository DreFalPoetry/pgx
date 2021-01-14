import React, { Fragment } from 'react'
import {Breadcrumb,Icon} from 'antd'
import './index.css'
class PgsDashboard extends React.Component{
    render(){
        return (
          <Fragment>
              <Breadcrumb>
                  <Breadcrumb.Item>  <Icon type='bar-chart' /> 总览</Breadcrumb.Item>           
              </Breadcrumb>
              <div className='main'>
                  我是总览
              </div>
          </Fragment>
        )
    }
}

export default PgsDashboard
