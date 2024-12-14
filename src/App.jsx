import { useState,  useEffect } from 'react'
import Description from './Description/description.jsx';
import Feedback from './Feedback/feedback.jsx';
import  Option from './Option/option.jsx'
import  Notification from './Notification/notification.jsx'

function App() { 

  const [voteDate, setVoteDate] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("voteDate"));
    if (savedData?.good >= 0 && savedData?.neutral >= 0 && savedData?.bad >= 0) {
      return savedData;
    }
    return { good: 0, neutral: 0, bad: 0 }; 
  });


  useEffect(() => {
    localStorage.setItem("voteDate", JSON.stringify(voteDate));
  }, [voteDate]);


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
    <Option onClick = {updateFeedback} onReset = {resetFeedback} totalFeedback = {countTotalFeedback()}/>
    {countTotalFeedback() > 0 ? (<Feedback good = {voteDate.good} neutral = {voteDate.neutral} bad = {voteDate.bad} totalFeedback = {countTotalFeedback()} positiveFeedback = {countPositiveFeedback()}/>) : (
          <Notification message="No feedback yet" />
        )}
  </>
)
}

export default App
