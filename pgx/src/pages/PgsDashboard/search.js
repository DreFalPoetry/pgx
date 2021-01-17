import React, { Fragment } from 'react';
import {DatePicker,Menu, Icon, Input, Checkbox, Button, Anchor  } from 'antd';
const { SubMenu } = Menu;
const { Search } = Input;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

class SearchContent extends React.Component{
  constructor(){
    super();
    this.state = {
      current: 'mail'
    };
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    });
  }

  searchKeyword = (value) => {
    console.log('search value:',value);
  }

  changeCheckbox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }


  render(){
    return (
      <Anchor className="anchor-wrapper bottom-shadow" offsetTop={50}>
        <div className="line-wrapper">
          <div className="report-search-time-bar">
            <label className="report-search-title">创建时间：</label>
            <RangePicker
              format={dateFormat}
            />
            <label className="report-search-title">审核时间：</label>
            <RangePicker
              format={dateFormat}
            />
          </div>
        </div>
        <div className="line-wrapper">
          <Menu mode="horizontal"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            style={{maxWidth:'95%'}}
          >
            <Menu.Item key="mail">
              <Icon type="mail" />
              全部计算
            </Menu.Item>
            <Menu.Item key="app">
              Miseq-gDNA
            </Menu.Item>
            <Menu.Item key="app2">
              Miseq-gDNA-b
            </Menu.Item>
            <Menu.Item key="app3">
              Miseq-gDNA-c
            </Menu.Item>
            <Menu.Item key="app4">
              Miseq-gDNA-d
            </Menu.Item>
            <Menu.Item key="app5">
              Miseq-gDNA-e
            </Menu.Item>
            <Menu.Item key="app6">
              Miseq-gDNA-f
            </Menu.Item>
            <Menu.Item key="app7">
              Miseq-gDNA-g
            </Menu.Item>
          </Menu>
        </div>
        <div className="line-wrapper">
          <Search
            onSearch={this.searchKeyword}
            placeholder="input search text"
            style={{ width: 260, marginLeft:'6px' }}
          />
          <Checkbox onChange={this.changeCheckbox} style={{marginLeft: '16px'}}>只看未读</Checkbox>
          <div className="fr button-wrapper">
            <Button icon="download" type="primary">导出链接</Button>
            <Button icon="download" type="primary">导出报告组</Button>
            <Button icon="plus">新建报告组</Button>
          </div>
        </div>
      </Anchor>
    );
  }
}

export default SearchContent;
