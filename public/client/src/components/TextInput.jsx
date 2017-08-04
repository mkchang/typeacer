import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <textarea 
          rows="10" 
          cols="50" 
          id="textarea" 
          placeholder="Start typing here!"
          value={this.state.value}
          onChange={e => {
            this.handleChange(e);
            this.props.handleTextInput(e);
          }}>
        </textarea>
      </div>
    );
  }
}

export default TextInput;