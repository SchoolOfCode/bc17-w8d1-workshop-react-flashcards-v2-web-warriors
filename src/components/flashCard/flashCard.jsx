import React from "react";
import "./flashCard.css"

export default function FlashCard() {
    return(
        <div className="flashCardContainer">
        <div className="flashCard1 card">
            <h1>
                🤔
            </h1>
            <p>
                What is react?
            </p>
        </div>

        <div className="flashCard2 card">
            <h1>
                🤔
            </h1>
            <p>
                What is JSX?
            </p>
        </div>

        <div className="flashCard3 card">
            <h1>
                🤔
            </h1>
            <p>
                How do you create a React component?
            </p>
        </div>
    </div>
    )
}
