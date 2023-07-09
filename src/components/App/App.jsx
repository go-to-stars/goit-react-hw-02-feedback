import React from "react";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics.jsx";
import { Section } from "../Section/Section.jsx";
import { Notification } from "../Notification/Notification.jsx";
import { Container } from "./App.stiled.jsx"; // імпорт стилів тегу div (Container),

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }; // об'єкт-стану state класу App з даними що відображаються в інтерфейсі

  buttonClick = (e) => {
    const nameButton = e.target.name;
    this.setState((buttonCount) => ({
      [nameButton]: buttonCount[nameButton] + 1,
    }));
  }; // метод buttonClick класу App; виклик методу призводить до оновлення об'єкту-стану state (інкремент значення) в полі, яке було ініціатором цієї події

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }; // метод countTotalFeedback класу App; виклик методу повертає суму числових значень ключів good, neutral та bad об'єкту-стану state

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const countTotal = this.countTotalFeedback();
    return Math.round((good * 100) / countTotal);
  }; // метод countPositiveFeedbackPercentage класу App; виклик методу повертає виражену у % частку від ділення числового значеня ключа good на суму числових значень ключів good, neutral та bad об'єкту-стану state

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.buttonClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification textMassage="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  } // повернення для рендеру розмітки додатку для збору статистики "Віджет відгуків"
} // клас App(), повертає компоненти з даними для рендеру сторінки
