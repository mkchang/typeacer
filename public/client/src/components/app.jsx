import React from 'react';
import TextPrompt from './TextPrompt.jsx';
import TextInput from './TextInput.jsx';
import Status from './Status.jsx';
import ErrorFlag from './ErrorFlag.jsx';
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
      wpm: 0,
      error: false
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
              wpm: Math.round(this.state.textPrompt.words / ((this.state.endTime - this.state.startTime) / 60000))
            }, () => {
              this.sendResults();
            });
          });
        } else if (this.state.textInput !== this.state.textPrompt.quote.slice(0, this.state.textInput.length)) {
          this.flagError();
        } else if (this.state.error) {
          this.setState({
            error: false
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

  flagError() {
    this.setState({
      error: true
    });
  }

  sendResults() {
    $.ajax({
      url: '/results',
      method: 'POST',
      data: JSON.stringify({
        quote: this.state.textPrompt.quote,
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
        <h3>Type this prompt:</h3>
      <div>
        <TextPrompt textPrompt={this.state.textPrompt.quote} />
      </div>
      <div>
        <ErrorFlag error={this.state.error} />
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