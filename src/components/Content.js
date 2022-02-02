import { ScreenSize } from "../Hooks/ScreenWidth";

import { placeholderText, About } from "../Data/Data";
import AnimatedCharacters from "./AnimatedCharacters";
import { container, parent, child } from "../Data/FramerMotion";

//styled components
import { Title, TitleContainer } from "../styles/GlobalStyles";
import { NameText, NameTextContainer } from "../styles/NameTextContainerStyles";
function Content({ children }) {
  const [ScreenWidth] = ScreenSize();
  return (
    <NameTextContainer>
      <NameText
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </NameText>
      <TitleContainer variants={parent} initial="initial" animate="animate">
        {About.map((item) => {
          const { styles } = item;
          return (
            <Title variants={child} {...styles} ScreenWidth={ScreenWidth}>
              {item.text}
            </Title>
          );
        })}
      </TitleContainer>
      {children}
    </NameTextContainer>
  );
}

export default Content;
