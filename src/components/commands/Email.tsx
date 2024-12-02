import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const mailId = `va9zz09af@mozmail.com`;

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    window.open("mailto:" + mailId, "_self");
  }

  return (
    <Wrapper>
      <span>You can reach me at: {mailId}</span>
    </Wrapper>
  );
};

export default Email;
