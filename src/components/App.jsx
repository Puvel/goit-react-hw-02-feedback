import { Component } from 'react';
import { Section } from 'components/section/Section';
import { FeedbackOptions } from 'components/feedbackOptions/feedbackOptions';
import { Statistics } from 'components/statistics/Statistics';
import { Notification } from 'components/notification/Notification';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(state => ({
      [name]: state[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
