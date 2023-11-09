import { useState } from "react";
import { ReactComponent as DownArrow } from "../../../assets/downArrow.svg";
import { ReactComponent as UpArrow } from "../../../assets/upArrow.svg";
import "./Accordion.css"

const Accordion = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
        className="accordionContainer"
        onClick={() => setIsOpen(!isOpen)}
    >
        <div className="accordionHeader">
            <p>{question}</p>

            {isOpen ? <UpArrow /> : <DownArrow />}
        </div>

        {isOpen && (
            <div className="accordionAnswer">
                <p>{answer}</p>
            </div>
        )}
    </div>
  )
}

export default Accordion;