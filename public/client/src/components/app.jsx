import React from 'react';
import TextPrompt from './TextPrompt.jsx';
import TextInput from './TextInput.jsx';
import Status from './Status.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      startTime: 0,
      endTime: 0,
      secondsElapsed: 0,
      textInput: '',
      textPrompt: {},
      wpm: 0
    }
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/textPrompt',
      success: (data) => {
        this.setState({
          textPrompt: data
        })
      },
      error: (err) => {
        console.log('GET /textPrompt failed ', err);
      }
    })
  }

  handleTextInput(e) {
    this.setState({textInput: e.target.value}, () => {
      if (this.state.started) {
        if (this.state.textInput === this.state.textPrompt.quote) {
          console.log('Finished!');
          this.setState({
            started: false,
            endTime: Date.now()
          }, () => {
            this.setState({
              secondsElapsed: (this.state.endTime - this.state.startTime) / 1000,
              wpm: this.state.textPrompt.words / ((this.state.endTime - this.state.startTime) / 60000)
            }, () => {
              this.sendResults();
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

  sendResults() {
    $.ajax({
      url: '/results',
      method: 'POST',
      data: JSON.stringify({
        textPrompt: this.state.textPrompt.quote,
        wpm: this.state.wpm
      }),
      contentType: 'application/json',
      success: (data) => {
        console.log('POST success: ', data);
      },
      error: (err) => {
        console.log('POST /sendResults failed ', err);
      }
    })
  }

  render() {
    return (
      <div>
        <h1>TypeAcer</h1>
      <div>
        <TextPrompt textPrompt={this.state.textPrompt.quote} />
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