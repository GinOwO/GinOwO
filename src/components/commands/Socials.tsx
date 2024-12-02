import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Socials: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>
            -{" "}
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecorationColor: "inherit", color: "inherit" }}
            >
              {url}
            </a>
          </CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/GinOwO",
    tab: 4,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ginowo/",
    tab: 2,
  },
  {
    id: 3,
    title: "LeetCode",
    url: "https://leetcode.com/u/ginowo/",
    tab: 2,
  },
  {
    id: 4,
    title: "CodeForces",
    url: "https://codeforces.com/profile/GinOwO",
    tab: 0,
  },
  {
    id: 5,
    title: "Discord",
    url: "https://discord.gg/gin_.exe",
    tab: 3,
  },
];

export default Socials;
