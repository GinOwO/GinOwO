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
        I'm <HighlightAlt>a low-level developer</HighlightAlt> who like to
        fiddle with random stuff.
      </p>
      <p>
        I'm currently a 3rd year CSE student who just wants to make stuff which
        can make stuff.
      </p>
      <br />
      <p>
        I'm deep in the C/C++ iceberg, but I know Python and JS but WebDev isn't
        really my forte.
        <br />
        I'm also learning Rust, Go and Haskell, but I'm not that good at them
        yet.
        <br />
      </p>
      <p>
        I'm mostly interested in low level development like Kernels, OSDev,
        Compilers, etc but I <br /> also dip my toes into GameDev, SecOps,
        DevOps and ML.
        <br />
      </p>
      <p>
        Oh, I also do a bit of 3d modelling using Blender but it's mostly for
        fun. <br />
        Also I'm a Linux supremacist and I will convert you too. :) <br />
      </p>
      <br />
      <p>
        How can you talk to me: Pretty fluent in English, हिन्दी, മലയാളം, and a
        beginner in Español, Italiano and 日本語. <br />
      </p>
      <br />
      <p>Nice to meet you! :D</p>
    </AboutWrapper>
  );
};

export default About;
