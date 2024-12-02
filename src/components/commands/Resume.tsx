import React from "react";
import { HelpWrapper } from "../styles/Help.styled"; // Adjust as needed

const Resume: React.FC = () => {
  return (
    <HelpWrapper data-testid="resume">
      <p>
        You can find my resume{" "}
        <a
          href="https://docs.google.com/document/d/1gj20Kp0GCQEf_HW7wS6GXIxvyXvpp0i94Nw6_t7ddF0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecorationColor: "inherit", color: "inherit" }}
        >
          here
        </a>
        .
      </p>
    </HelpWrapper>
  );
};

export default Resume;
