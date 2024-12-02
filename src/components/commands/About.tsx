import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Gin</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a low-level developer</HighlightAlt> who randomly
        fiddles with random stuff.
      </p>
      <p>
        I'm currently a 3rd year CSE student who just wants to make stuff which
        can make stuff. Nice to meet you! 😊
      </p>
    </AboutWrapper>
  );
};

export default About;
