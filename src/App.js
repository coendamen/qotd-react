import React, { Component } from 'react';
import './App.css';


class App extends Component {

    render() {
        return (
          <div className="App">
              <p>
              <Quote />
          </p>
          </div>
          );
    }
}

class Quote extends Component {
    render() {
        return this.getQuote();
    }

    getQuote() {
        const dayOfMonth = new Date().getDate();
        const i = dayOfMonth % this.props.quotes.length;
        return "The Quote of the Day is " + this.props.quotes[i];
    }
}

Quote.defaultProps = {
    quotes: ["\"The Quote of the Day\"", "\"Carpe Diem\"", "\"Don't take life so seriously, you won't survive it anyway\""]
};

export default App;
