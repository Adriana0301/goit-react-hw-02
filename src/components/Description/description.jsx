import {
    descTitle,
    descText,
  } from "../Description/description.module.css";

const Description = () => {

    return (
        <>
        <h1 className={descTitle}>Sip Happens Café</h1>
        <p className={descText}>Please leave your feedback about our service by selecting one of the options below.</p>
        </>
    )
}

export default Description