import React, { Fragment } from 'react';
import {Breadcrumb,Icon} from 'antd';
import CPagination from '@/components/Pagination';
import Search from './search';
import Table from './table';
import './index.css';
class PgsDashboard extends React.Component{
  onShowSizeChange = (current, page) => {

  }

  render(){
    return (
      <Fragment>
        <div className="main">
          <Search/>
          <Table/>
          <CPagination
            defaultCurrent={3}
            onShowSizeChange={this.onShowSizeChange}
            total={40}
          />
        </div>
      </Fragment>
    );
  }
}

export default PgsDashboard;
