import React, { Component } from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import Controls from "./components/Controls";
import Statistics from "./components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodClick = () => {
    this.setState((prev) => {
      return { good: prev.good + 1 };
    });
  };

  onNeutralClick = () => {
    this.setState((prev) => {
      return { neutral: prev.neutral + 1 };
    });
  };
  onBadClick = () => {
    this.setState((prev) => {
      return { bad: prev.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) return 0;
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    return (
      <Container>
        <Title titleText={"Please leave feedback"} />
        <Controls
          onGoodClick={this.onGoodClick}
          onNeutralClick={this.onNeutralClick}
          onBadClick={this.onBadClick}
        />
        <Title titleText={"Statistics"} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}

export default App;
