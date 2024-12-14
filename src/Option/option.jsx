import {
    optionWrapper,
    optionButton,
  } from "../Option/option.module.css";

const Option = ({onClick, onReset, totalFeedback}) => {
    return (
        <div className={optionWrapper}>
            <button className= {optionButton} type="button" onClick={() => onClick("good")}>Good</button>
            <button className= {optionButton} type="button" onClick={() => onClick("neutral")}>Neutral</button>
            <button className= {optionButton} type="button" onClick={() => onClick("bad")}>Bad</button>
            {totalFeedback > 0 && (<button className= {optionButton} type="button" onClick={() => onReset("bad")}>Reset</button>)}
        </div>
    )
}


export default Option