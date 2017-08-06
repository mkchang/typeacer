import React from 'react';
import { Alert } from 'reactstrap';

class ErrorFlag extends React.Component {
  render() {
    var errorState;
    if (this.props.error) {
      errorState = (
        <Alert color="danger">Error! Check spelling!</Alert>
      );
    } else {
      errorState = (
        <Alert color="success">No mistakes yet, keep going!</Alert>
      );
    }
    return errorState;
  }
}

export default ErrorFlag;