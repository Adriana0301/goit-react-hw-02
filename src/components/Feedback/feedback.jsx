import {
    feedList,
    feedWraper,
    feedListItem,
    feedWraperText
  } from "../Feedback/feedback.module.css";

function Feedback({good, neutral, bad, totalFeedback, positiveFeedback}) {
    return (
        <>
        <ul className= {feedList}>
            <li className={feedListItem}>Good: {good}</li>
            <li className={feedListItem}>Neutral: {neutral}</li>
            <li className={feedListItem}>Bad: {bad}</li>
        </ul>
        <div className={feedWraper}>
            <p className={feedWraperText}>Total: {totalFeedback}</p>
            <p className={feedWraperText}>Positive: {positiveFeedback}%</p>
        </div>
        </>
    )
}


export default Feedback