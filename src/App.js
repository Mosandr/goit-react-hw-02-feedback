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

  onFeedbackClick = (event) => {
    const feedBackType = event.target.textContent.toLowerCase();
    this.setState((prev) => {
      return { [feedBackType]: prev[feedBackType] + 1 };
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
    const feedbackOptions = [
      { feedbackType: "Good", color: "orange" },
      { feedbackType: "Neutral", color: "green" },
      { feedbackType: "Bad", color: "red" },
    ];

    return (
      <Container>
        <Title titleText={"Please leave feedback"} />
        <Controls
          onFeedbackClick={this.onFeedbackClick}
          btnList={feedbackOptions}
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
