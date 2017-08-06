import React from 'react';
import { Alert } from 'reactstrap';

class Status extends React.Component {
  
  render() {
    var record = (<div></div>);
    if (this.props.record) {
      if (this.props.wpm === this.props.record) {
        record = (
          <Alert color="info">
            <p>{`Results: ${this.props.wpm} words per minute!`}</p>
            <p>{`New record!`}</p>
          </Alert>
        );
      } else {
        record = (
          <Alert color="info">
            <p>{`Results: ${this.props.wpm} words per minute!`}</p>
            <p>{'Not quite there yet, better luck next time!'}</p>  
            <p>{`Current record: ${this.props.record} words per minute`}</p>
          </Alert>
        );
      }      
    }
      
    return record;
  }
}

export default Status;