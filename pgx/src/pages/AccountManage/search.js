import React, { Fragment } from 'react';
import {DatePicker,Menu, Icon, Input, Checkbox, Button, Anchor  } from 'antd';
const { Search } = Input;

class SearchContent extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  createAccount = () => {}

  render(){
    return (
      <Anchor className="anchor-wrapper bottom-shadow" offsetTop={50}>
        <div className="line-wrapper">
          <Search
            onSearch={value => console.log(value)}
            placeholder="input search text"
            style={{ width: 260 }}
          />
          <div className="fr">
            <Button onClick={this.createAccount} type="primary">创建账户</Button>
          </div>
        </div>
      </Anchor>
    );
  }
}

export default SearchContent;
