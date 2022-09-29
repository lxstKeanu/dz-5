import React, { Component } from 'react';
import {Ships} from './Ships'

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipID: 1,
    };

    console.log('---> Lesson: constructor');
  }

  render() {
    const {shipID } = this.state;
    const arr = ['Ship 1', 'Ship 2', 'Ship 3', 'Ship 4', 'Ship 5', 'Ship 6', 'Ship 7', 'Ship 8', 'Ship 9', 'Ship 10', 'Ship 11', 'Ship 12', 'Ship 13', 'Ship 14', 'Ship 15', 'Ship 16', 'Ship 17'];

    return (
      <div className="">
        {arr.map((e, index) => {
          return(<button onClick={() => this.setState({ shipID: index+1  })}>{e}</button>)
        })}
        <Ships shipID={shipID} />
      </div>
    );
  }

  componentDidMount() {
    console.log('---> Lesson: componentDidMount');
  }
}

export default Index;

Index.propTypes = {};

Index.defaultProps = {};