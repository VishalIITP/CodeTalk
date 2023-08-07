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
        <h3 className="accordion-title">{title}</h3>
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
          title="Is CodeTalk suitable for beginners?"
          content="Absolutely! CodeTalk is designed for learners of all levels. Whether you're a beginner looking to establish a solid coding foundation or an experienced coder aiming to refine your skills, CodeTalk caters to your needs."
        />
        <AccordionItem
          title="Are there any prerequisites for joining CodeTalk?"
          content=" CodeTalk welcomes learners from all backgrounds. While basic coding knowledge is helpful, the program is structured to accommodate beginners. A passion for coding and a willingness to learn are the only prerequisites."
        />
        <AccordionItem
          title="Is there a community or forum for CodeTalk participants to interact?"
          content="Yes, we have a community forum on discord serverand whats app awhere you can interact with fellow participants, discuss coding challenges, and share insights. Learning together enhances the experience!"
        />
        <AccordionItem
          title="Do we have to solve two questions daily during the class?"
          content=" Absolutely, two hands-on problems are presented each day. These challenges provide the platform for interactive problem-solving and group brainstorming, fostering a dynamic and engaging learning environment."
        />
        <AccordionItem
          title="How are the classes conducted in CodeTalk?"
          content="Each day we will connect on Zoom with your fellow learners at the start of the class we will discuss the concept of that day and after that discuss two problems on that topic"
        />
        <AccordionItem
          title="How can I prepare for CodeTalk sessions on Zoom?"
          content="To make the most of each session, review the concept beforehand if possible. Come with an inquisitive mind, ready to engage in discussions and contribute to the collaborative problem-solving process."
        />
        <AccordionItem
          title="Can I connect with my mentor outside the Zoom sessions?"
          content="While mentor interactions primarily occur during the Zoom sessions, you can seek clarifications and share insights through community forums and dedicated communication channels."
        />
        <AccordionItem
          title="Will I receive feedback on my coding challenges and progress?"
          content="CodeTalk provide personalized feedback on coding challenges. However, your progress will be tracked through your dashboard, allowing you to gauge your improvement over time."
        />
        <AccordionItem
          title="How does the learning roadmap work?"
          content="Our learning roadmap outlines a clear path through essential Data Structures and Algorithms topics. You'll follow a step-by-step guide, covering everything you need to excel in placements within 4 weeks."
        />
        <AccordionItem
          title="Can I extend the 4-week program duration if needed?"
          content="CodeTalk is designed to be completed within 4 weeks. However, we understand that individual learning paces may vary. Contact our support team at [suppourt.codetalk@gmail.com] if you require special accommodations."
        />
        <AccordionItem
          title="Is CodeTalk suitable for placements in specific tech companies?"
          content="Yes, CodeTalk's comprehensive curriculum covers essential DSA topics that are commonly asked in placement interviews across various tech companies. It provides a strong foundation for your placements preparation."
        />
        <AccordionItem
          title="Is there a certificate upon completion of the program?"
          content="Yes, upon successfully completing the CodeTalk program, you'll receive a certificate of achievement. This certificate validates your dedication and proficiency in Data Structures and Algorithms."
        />
        <AccordionItem
          title="How do I enroll in CodeTalk?"
          content="Enrolling in CodeTalk is simple. Visit our website, and follow the registration process. Once enrolled, you'll gain immediate access to the program and its resources."
        />


        {/* Add more accordion items as needed */}
      </div>
    </>
  );
};

export default Accordion;
