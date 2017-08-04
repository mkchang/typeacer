import React from 'react';
import TextPrompt from './TextPrompt.jsx';
import TextInput from './TextInput.jsx';
import Status from './Status.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      startTime: 0,
      endTime: 0,
      secondsElapsed: 0,
      textInput: '',
      textPrompt: {text: 'Once you eliminate the impossible', words: 5},
      wpm: 0
    }
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(e) {
    this.setState({textInput: e.target.value}, () => {
      if (this.state.started) {
        if (this.state.textInput === this.state.textPrompt.text) {
          console.log('Finished!');
          this.setState({
            started: false,
            endTime: Date.now()
          }, () => {
            this.setState({
              secondsElapsed: (this.state.endTime - this.state.startTime) / 1000,
              wpm: this.state.textPrompt.words / ((this.state.endTime - this.state.startTime) / 60000)
            });
          });
        }
      } else {
        this.setState({
          started: true,
          startTime: Date.now()
        });
        console.log('started');
      }
    });
  }

  render() {
    return (
      <div>
        <h1>TypeAcer</h1>
      <div>
        <TextPrompt textPrompt={this.state.textPrompt.text} />
      </div>
      <div>
        <TextInput handleTextInput={this.handleTextInput}/>
      </div>
      <div>
        <Status started={this.state.started} wpm={this.state.wpm} />
      </div>
      </div>
    );
  }
}

export default App;