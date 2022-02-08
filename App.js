import logo from './logo.svg';
import './App.css';
import { NavContainer, NavElement } from './style/navbar';
import {MainContainer, ExperienceContainer, ProjectContainer, HomeContainer, SkillContainer} from './style/main_block';

function App() {
  const menuItems = ["Home", "Project", "Skill", "Experience"];
  const [clicked, setClicked] = useState("");

  const handleClick = (item) => {
    setClicked(item);
  };
  return (
  <MainContainer>
    <NavContainer>
      {menuItems.map((elem, i) => (
          <NavElement
            key={i}
            focused={clicked === elem}
            onClick={() => handleClick(elem)}
          >
            {elem}
          </NavElement>
      ))}
    </NavContainer>
    <HomeContainer>

    </HomeContainer>

    <ExperienceContainer>

    </ExperienceContainer>

    <ProjectContainer>

    </ProjectContainer>

    <SkillContainer>

    </SkillContainer>

  </MainContainer>
  );
}

export default App;
