import {
  Cmd,
  HeroContainer,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
 ▗▄▄▖▗▄▄▄▖▗▖  ▗▖ ▗▄▖ ▗▖ ▗▖ ▗▄▖ 
▐▌     █  ▐▛▚▖▐▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌
▐▌▝▜▌  █  ▐▌ ▝▜▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌
▝▚▄▞▘▗▄█▄▖▐▌  ▐▌▝▚▄▞▘▐▙█▟▌▝▚▄▞
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
 ▗▄▄▖▗▄▄▄▖▗▖  ▗▖ ▗▄▖ ▗▖ ▗▖ ▗▄▖ 
▐▌     █  ▐▛▚▖▐▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌
▐▌▝▜▌  █  ▐▌ ▝▜▌▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌
▝▚▄▞▘▗▄█▄▖▐▌  ▐▌▝▚▄▞▘▐▙█▟▌▝▚▄▞
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <Seperator>----</Seperator>
        <div>
          Welcome to my terminal portfolio. Website source can be found at{" "}
          <a
            href="https://github.com/GinOwO/GinOwO/tree/pages"
            style={{ textDecorationColor: "inherit", color: "inherit" }}
          >
            GinOwO/pages
          </a>
          .
        </div>
        <Seperator></Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <Seperator></Seperator>
        <div>
          Credits to{" "}
          <a
            href="https://satnaing.dev/"
            style={{ textDecorationColor: "inherit", color: "inherit" }}
          >
            Sat Naing
          </a>{" "}
          for the original template
        </div>
        <Seperator>----</Seperator>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
