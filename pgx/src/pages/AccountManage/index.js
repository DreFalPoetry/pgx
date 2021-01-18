import React, {Fragment} from 'react';
import {Button, Table} from 'antd';
import {getUserList} from '@/request/api';
import CPagination from '@/components/Pagination';
import style from './index.module.less';
import SearchContent from './search';

export default class AccountManage extends React.Component{
  constructor(){
    super();
    this.columns = [{
      title: '账号',
      dataIndex: 'account'
    },{
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '手机号',
      dataIndex: 'mobile'
    },
    {
      title: '邮箱',
      dataIndex: 'mail'
    },{
      title: '状态',
      dataIndex: 'status'
    },{
      title: '操作',
      dataIndex: 'opt',
      render:function(text, record, index){
        return (
          <Fragment>
            <Button type="link">设置</Button>
            <Button type="link">编辑</Button>
            <Button type="link">删除</Button>
          </Fragment>
        );
      }
    }];
    this.state = {
      tableData:[]
    };
  }

  componentDidMount(){
    getUserList().then(res=>{
      console.log(res);
      this.setState({
        tableData: res.data.data
      });
    });
  }

  render(){
    return (
      <div className={style.userAccountWrapper}>
        <SearchContent/>
        <div className={style.tableWrapper}>
          <Table columns={this.columns} dataSource={this.state.tableData} pagination={false} rowKey="id"/>
        </div>
        <CPagination />
      </div>
    );
  }
}