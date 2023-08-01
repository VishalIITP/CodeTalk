import React, { useState } from "react";
import "./css/Accordian.css"; // Add your custom CSS for styling
import './../App.css'

const AccordionItem = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span
          className={`accordion-icon ${isExpanded ? "expanded" : ""}`}
        ></span>
      </div>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  return (
    <>
      <div className="heroT1">
        <div className="whiteT1">Frequently Asked Questions</div>
      </div>
      <div className="height20"></div>
      <div className="height20"></div>
      <div className="height20"></div>

      <div className="accordion-container">
        <AccordionItem
          title="Section 1"
          content="Content for Section 1 goes here..."
        />
        <AccordionItem
          title="Section 2"
          content="Content for Section 2 goes here..."
        />
        <AccordionItem
          title="Section 3"
          content="Content for Section 3 goes here..."
        />
        <AccordionItem
          title="Section 3"
          content="Content for Section 3 goes here..."
        />
        <AccordionItem
          title="Section 3"
          content="Content for Section 3 goes here..."
        />
        <AccordionItem
          title="Section 3"
          content="Content for Section 3 goes here..."
        />
        
        {/* Add more accordion items as needed */}
      </div>
    </>
  );
};

export default Accordion;
