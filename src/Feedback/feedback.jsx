function Feedback({good, neutral, bad, totalFeedback, positiveFeedback}) {
    return (
        <>
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
        </ul>
        <div>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positiveFeedback}%</p>
        </div>
        </>
    )
}


export default Feedback