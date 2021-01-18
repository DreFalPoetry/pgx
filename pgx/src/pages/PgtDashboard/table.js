import React, {Fragment} from 'react';
import { Skeleton, Switch, Card, Icon, Avatar, Button, Dropdown, Menu, Table } from 'antd';
import deletes from '../../assets/delete.ef01c7f7.png';
import styles from './index.module.less';
import {getLestList} from '@/request/api';
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {}
  };
  if (index === 1) {
    obj.props.colSpan = 0;
  }
  return obj;
};
export default class TableContent extends React.Component{
  constructor(){
    super();
    this.columns = [{
      title: '文件名称',
      dataIndex: 'fileName',
      key: 'fileName',
      render: text => <a>{text}</a>
    },
    {
      title: '样本名称',
      dataIndex: 'ybName',
      key: 'ybName'
    },
    {
      title: 'Total_Reads/Pairs',
      dataIndex: 'totalReads',
      key: 'totalReads'
    },
    {
      title: 'MT_ratio(%)',
      dataIndex: 'mtRatio',
      key: 'mtRatio'
    },
    {
      title: 'Map_Ratio(%)',
      dataIndex: 'mapRatio',
      key: 'mapRatio'
    },
    {
      title: 'Duplicate(%)',
      dataIndex: 'duplicate',
      key: 'duplicate'
    },
    {
      title: 'Unique_Reads/Pairs',
      dataIndex: 'uniqueReads',
      key: 'uniqueReads'
    },
    {
      title: 'GC_Count(%)',
      dataIndex: 'gcCount',
      key: 'gcCount'
    },
    {
      title: 'SD',
      dataIndex: 'sd',
      key: 'sd'
    },
    {
      title: '编辑',
      dataIndex: 'optration',
      key: 'optration',
      render:(text,row)=>{
        return <a ><img src={deletes}/></a>;
      },
      width:80
    }];

    this.state = {
      tableData: [],
      status:''
    };
  }
  componentDidMount(){
    const data={
      start:0,
      length:1
    };
    getLestList(0,data).then(res=>{
      // 有错误明天再看
      console.log(res.data.data[0].reportAnalysisListResList);
      const analysisStatust = res.data.data[0].reportAnalysisListResList.analysisStatus;
      if(analysisStatust==2){
        this.setState({
          tableData:res.data.data[0].reportAnalysisListResList
        });
      }else if(analysisStatust==0){
        this.setState({
          status:'解析未开始！'
        });
      }else if(analysisStatust==1){
        this.setState({
          status:'解析进行中！'
        });
      }else if(analysisStatust==3){
        this.setState({
          status:'解析失败！'
        });
      }
    });
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
          <Table columns={this.columns} dataSource={this.state.tableData} pagination={false}/>
        </div>
      </div>
    );
  }
}