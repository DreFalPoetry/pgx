import React, {Fragment} from 'react';
import { Skeleton, Switch, Card, Icon, Avatar, Button, Dropdown, Menu, Table } from 'antd';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];

export default class TableContent extends React.Component{
  constructor(){
    super();
    this.columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }];

    this.state = {
      tableData: data
    };
  }
  render(){
    const menu = (
      <Menu>
        <Menu.Item>
          下载
        </Menu.Item>
        <Menu.Item>
          查看
        </Menu.Item>
      </Menu>
    );
    const groupData = (
      <Dropdown overlay={menu}>
        <Button icon="down" type="link">
          组数据
        </Button>
      </Dropdown>
    );
    return (
      <div className="table-line-wrapper">
        <div className="info-wrapper">
          <Card
            actions={[
              <Button icon="edit" key="edit" type="link">编辑</Button>,
              groupData,
              <Button icon="download" key="export" type="link">导出</Button>
            ]}
            bordered={false}
            style={{ width: 300 }}
          >
            cardContent
          </Card>
        </div>
        <div className="table-wrapper">
          <Table columns={this.columns} dataSource={data} pagination={false}/>
        </div>
      </div>
    );
  }
}