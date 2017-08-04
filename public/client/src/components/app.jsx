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
      textInput: '',
      textPrompt: 'Once you eliminate the impossible'
    }
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(e) {
    console.log(e.target.value);
    this.setState({textInput: e.target.value}, () => {
      if (this.state.started) {
        if (this.state.textInput === this.state.textPrompt) {
          console.log('Finished!');
          this.setState({
            started: false,
            endTime: Date.now()
          }, () => {
            console.log(`Time taken: ${(this.state.endTime - this.state.startTime) / 1000 }s`)
          });
        }
      } else {
        this.setState({
          started: true,
          startTime: Date.now()
        });
      }
    });
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
      <div>
        <Status started={this.state.started} />
      </div>
      </div>
    );
  }
}

export default App;