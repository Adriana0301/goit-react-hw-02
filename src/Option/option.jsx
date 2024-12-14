const Option = ({onClick, onReset}) => {
    return (
        <ul>
            <li><button type="button" onClick={() => onClick("good")}>Good</button></li>
            <li><button type="button" onClick={() => onClick("neutral")}>Neutral</button></li>
            <li><button type="button" onClick={() => onClick("bad")}>Bad</button></li>
            <li><button type="button" onClick={() => onReset("bad")}>Reset</button></li>
        </ul>
    )
}


export default Option