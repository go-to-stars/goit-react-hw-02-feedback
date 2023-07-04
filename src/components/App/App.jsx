import React from "react";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Statistics/Statistics.jsx";
import { Section } from "../Section/Section.jsx";
import { Notification } from "../Notification/Notification.jsx";
import { Container } from "./App.stiled.jsx";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonClick = (evt) => {
    const nameButton = evt.target.name;
    this.setState((buttonCount) => ({
      [nameButton]: buttonCount[nameButton] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const countTotal = this.countTotalFeedback();
    return Math.round((good * 100) / countTotal);
  };

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
            )
          }
        </Section>
      </Container>
    );
  }
} // функція  App(), повертає компоненти з даними для рендеру сторінки

// export default App;

//  render() {
//     return (
//       <Container>
//         <Section
//           title="Please leave feedback"
//           children={
//             <FeedbackOptions
//               options={Object.keys(this.state)}
//               onLeaveFeedback={this.buttonClick}
//             />
//           }
//         ></Section>
//         <Section
//           title="Statistics"
//           children={
//             this.countTotalFeedback() === 0 ? (
//               <Notification textMassage="There is no feedback" />
//             ) : (
//               <Statistics
//                 good={this.state.good}
//                 neutral={this.state.neutral}
//                 bad={this.state.bad}
//                 total={this.countTotalFeedback()}
//                 positivePercentage={this.countPositiveFeedbackPercentage()}
//               />
//             )
//           }
//         ></Section>
//       </Container>
//     );
//   }

/* {this.countTotalFeedback() > 0 ? (
            <Notification textMassage="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )} */
