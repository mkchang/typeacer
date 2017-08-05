import React from 'react';

class TextPrompt extends React.Component {
  render() {
    return (
      <div className="TextPrompt">
        {this.props.textPrompt}
      </div>
    );
  }
}

export default TextPrompt;