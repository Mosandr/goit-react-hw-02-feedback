import React, { Component } from "react";
import Container from "./components/Container";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
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
    const feedbackOptions = Object.keys(this.state);

    return (
      <Container>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.onFeedbackClick}
          />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              feedback={Object.entries(this.state)}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
