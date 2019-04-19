import React from 'react';
import Timer from './components/Timer';
import SessionsCompletedCounter from './components/SessionsCompletedCounter';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.increaseSessionsCompleted = this.increaseSessionsCompleted.bind(this);

    this.state = {
      sessionsCompleted: 0,
    };
  }

  increaseSessionsCompleted() {
    // TODO 4.
    this.setState((prevState) => {
      return {sessionsCompleted: prevState.sessionsCompleted + 1};
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="header">Today</h1>
        {/* TODO 4. */}
        <Timer mode="WORK" autoPlays onSessionComplete={() => this.increaseSessionsCompleted()} />
        <SessionsCompletedCounter sessionsCompleted={this.state.sessionsCompleted} />
      </div>
    );
  }
}

export default App;
