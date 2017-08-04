import React from 'react';

class Status extends React.Component {
  
  render() {
    return (
      <div>
        {`Started: ${this.props.started.toString()}`}
      </div>
    );
  }
}

export default Status;