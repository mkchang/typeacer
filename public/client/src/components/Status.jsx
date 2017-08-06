import React from 'react';

class Status extends React.Component {
  
  render() {
    var record;
    if (this.props.record) {
      if (this.props.wpm === this.props.record) {
        record = (
          <div>
            <p>{`Results: ${this.props.wpm} words per minute!`}</p>
            <p>{`New record!`}</p>
          </div>
        );
      } else {
        record = (
          <div>
            <p>{`Results: ${this.props.wpm} words per minute!`}</p>
            <p>{'Not quite there yet, better luck next time!'}</p>  
            <p>{`Current record: ${this.props.record} words per minute`}</p>
          </div>
        );
      }      
    }
      
    return (
      <div>
          {record}
      </div>
    );
  }
}

export default Status;