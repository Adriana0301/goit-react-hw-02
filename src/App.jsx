import { useState } from 'react'
import Description from './Description/description.jsx';
import Feedback from './Feedback/feedback.jsx';
import  Option from './Option/option.jsx'
import  Notification from './Notification/notification.jsx'

function App() {
  
  const [voteDate, setVoteDate] = useState({
      good: 0,
      neutral: 0,
      bad: 0
  }); 
  const updateFeedback = feedbackType => {
    setVoteDate(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1}))
    
  }

  const resetFeedback = () => {
    setVoteDate({ good: 0, neutral: 0, bad: 0 });
  };

  const countTotalFeedback = () => {
    return Object.values(voteDate).reduce((acc, value) => acc + value, 0)
  };

  const countPositiveFeedback = () => {
    const total = countTotalFeedback();
    return total ? Math.round((voteDate.good / total) * 100) : 0;
  };


  
  return (
    <>
    <Description></Description>
    <Option onClick = {updateFeedback} onReset = {resetFeedback}/>
    {countPositiveFeedback() > 0 ? (<Feedback good = {voteDate.good} neutral = {voteDate.neutral} bad = {voteDate.bad} totalFeedback = {countTotalFeedback()} positiveFeedback = {countPositiveFeedback()}/>) : (
          <Notification message="No feedback yet" />
        )}
  </>
)
}

export default App
