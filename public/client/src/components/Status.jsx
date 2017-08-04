import React from 'react';

class Status extends React.Component {
  
  render() {
    return (
      <div>
          {`Results: ${this.props.wpm} words per minute!`}
      </div>
    );
  }
}

export default Status;

// {`Started: ${this.props.started.toString()}`}