import React from 'react';

class TextPrompt extends React.Component {
  render() {
    return (
      <div>
        {this.props.textPrompt}
      </div>
    );
  }
}

export default TextPrompt;