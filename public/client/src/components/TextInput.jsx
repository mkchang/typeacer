import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <textarea 
          rows="10" 
          cols="50" 
          id="textarea" 
          placeholder="Start typing here!">
        </textarea>
      </div>
    );
  }
}

export default TextInput;