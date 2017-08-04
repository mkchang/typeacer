import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      started: false,
      startTime: 0,
      endTime: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.state.stated) {
    } else {
      this.setState({
        started: true,
        startTime: Date.now()
      });
    }
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
          onChange={this.handleChange}>
        </textarea>
      </div>
    );
  }
}

export default TextInput;