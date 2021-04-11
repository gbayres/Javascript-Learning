import React from 'react';
import "./card.css";


const CARD = props => {
    return(
        <div className="Case">
            <div className="Card">
                <div className="Title">
                    {"Flashcard #"}{5}
                </div>
                <div className="Question">
                    {"Meu pau de selfie"}
                </div>
            </div>
            <div className="Card Answer">{props.answer}</div>
        </div>
    )
}

export {CARD};