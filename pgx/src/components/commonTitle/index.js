import React from 'react';
import './index.css';

class CommonTitle extends React.Component{
  render(){
    return (
      <span className="common-title-wrapper">
        <i className="dna-icon"></i>
        {this.props.title || ''}
        <i className="dna-icon"></i>
      </span>
    );
  }
}

export default CommonTitle;