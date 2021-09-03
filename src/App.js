import React from "react";
import Section from "./components/Section/Section.js";
import FeedbackOptions from "./components/Feedback/FeedbackOptions.js";
import Statistics from "./components/Statistics/Statistics.js";
import Notification from "./components/Notification/Notification.js";
import { useState } from "react";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };
  const total = countTotalFeedback();
  const options = Object.keys({ good, neutral, bad });
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={"Statistics"}>
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={"No feedback given"} />
        )}
      </Section>
    </>
  );
}

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = (feedback) => {
//     this.setState((prevState) => ({
//       [feedback]: prevState[feedback] + 1,
//     }));
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return Math.round((good / total) * 100);
//   };
//   render() {
//     const options = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const { good, neutral, bad } = this.state;
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title={"Please leave feedback"}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title={"Statistics"}>
//           {total !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message={"No feedback given"} />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
// export default App;
