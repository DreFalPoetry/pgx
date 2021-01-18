import React from 'react';
import { Pagination } from 'antd';

export default class CPagination extends React.Component {
  onShowSizeChange = (current, pageSize) => {
    this.props.onShowSizeChange(current, pageSize);
  }

  render(){
    return (
      <div className="pagination-wrapper">
        <Pagination
          defaultCurrent={this.props.defaultCurrent || 1}
          onShowSizeChange={this.onShowSizeChange}
          showSizeChanger
          total={this.props.total || 0}
        />
      </div>
    );
  }
}