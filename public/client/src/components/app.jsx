import React from 'react';
import TextPrompt from './TextPrompt.jsx'
import TextInput from './TextInput.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textPrompt: 'Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.'
    }
  }

  render() {
    return (
      <div>
        <h1>TypeAcer</h1>
      <div>
        <TextPrompt textPrompt={this.state.textPrompt} />
      </div>
      <div>
        <TextInput />
      </div>
      </div>
    );
  }
}

export default App;