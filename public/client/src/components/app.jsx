import React from 'react';
import TextPrompt from './TextPrompt.jsx'
import TextInput from './TextInput.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      startTime: 0,
      endTime: 0,
      textInput: '',
      textPrompt: 'Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.'
    }
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(e) {
    console.log(e.target.value);
    // this.setState({textInput: e.target.value});
    // if (this.state.stated) {
    // } else {
    //   this.setState({
    //     started: true,
    //     startTime: Date.now()
    //   });
    // }
    // if (event.target.value === )
    // this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>TypeAcer</h1>
      <div>
        <TextPrompt textPrompt={this.state.textPrompt} />
      </div>
      <div>
        <TextInput handleTextInput={this.handleTextInput}/>
      </div>
      </div>
    );
  }
}

export default App;