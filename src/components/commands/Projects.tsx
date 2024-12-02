import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(
      arg,
      "go",
      projects.map(({ id }) => id.toString())
    ) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        C++ build systems are a pain, I'm looking at you CMake. <br />
        In before I switch to Rust.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "A GameEngine(untitled)",
    desc: "A game engine build from scratch using C++ and OpenGL with support for physics using Bullet, enemy AI using Python + Gym + Stable Baselines3, a somewhat working MM using AWS and countless hours of not sleeping all held together by the glue that is socket programming.",
    url: "https://github.com/GinOwO/GameEngine",
  },
  {
    id: 2,
    title: "Grub2 Theme Cycle",
    desc: "A bash script to cycle throguh grub2 themes on Fedora and Nobara and optionally on reboot.",
    url: "https://github.com/GinOwO/Grub2-Theme-Cycle",
  },
  {
    id: 3,
    title: "Caelum",
    desc: "A GUI based interpreter for a subset for the x86_64 assembly language built using Qt6 and C++.",
    url: "https://github.com/GinOwO/Caelum",
  },
];

export default Projects;
