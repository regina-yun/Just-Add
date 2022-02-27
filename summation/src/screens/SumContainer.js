import React from 'react';
import AddValue from '../components/addvalue';
import ListValue from '../components/listvalue';
import '../components/index.css';

class SumContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null
    }

    this.handleSumValue =  this.handleSumValue.bind(this);
  }

  handleSumValue = (value1, value2) => {
    console.log('the sum value has been updated');
    let value = value1 + value2;
    this.setState({value});
  }

  render() {
    return(
      <>
        <AddValue add={this.handleSumValue} operation={'+'}/>
        <hr/>
        <ListValue answer={this.state.value}/>
      </>
    )
  }
}

export default SumContainer;