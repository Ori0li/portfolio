import Navigator from "../layouts/Navigator";
import About from "../section/about/About";
import Contact from "../section/contact/Contact";
import Introduce from "../section/introduce/Introduce";
import Project from "../section/projects/Project";
import Skill from "../section/skill/skill";

const Main = () => {
  return (
    <div>
      <Introduce />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Navigator />
    </div>
  );
};

export default Main;
