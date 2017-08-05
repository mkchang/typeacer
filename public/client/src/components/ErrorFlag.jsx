import React from 'react';

class ErrorFlag extends React.Component {
  render() {
    var errorState;
    if (this.props.error) {
      errorState = (
        <p className="error">Error! Check spelling!</p>
      );
    } else {
      errorState = (
        <p className="noError">No mistakes, keep going!</p>
      );
    }
    return errorState;
  }
}

export default ErrorFlag;