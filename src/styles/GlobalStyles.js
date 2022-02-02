import styled, { createGlobalStyle, css } from "styled-components";
import { motion } from "framer-motion";
// import PermanentMarker from "../Assets/Fonts/PermanentMarker-Regular.ttf";

// @font-face {
//   font-family: "PermanentMarker-Regular";
//   font-style: normal;
//   font-weight: 400;
//   font-display: swap;
//   src: url(${PermanentMarker}) format("truetype");
// }

export const GlobalStyle = createGlobalStyle`
body{
  font-family: "Poppins-Regular";
}
`;

export const Container = styled.div`
  position: fixed;
  width: 100% !important;
  font-size: 0;
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  width: auto;
  height: 100vh;
  background: #000;
  @media (min-width: 1024px) {
    max-width: 1152px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
    `}
`;
export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}
    ${(props) =>
    props.alignTop &&
    css`
      align-items: top;
    `}
    ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;

export const Image = styled(motion.img)`
  ${(props) =>
    props.height &&
    css`
      height: ${(props) => props.height};
    `}
  position:${(props) => props.position || ""};
  padding: 0;
  margin: 0;
  width: ${(props) => props.width || ""};
  object-fit: ${(props) => props.objectFit || ""};
  object-position: ${(props) => props.objectPosition || ""};
  background-color: ${(props) => props.backgroundColor || ""};
  // &.Banner-Image {
  //   border: 4px solid red !important;
  // }
`;

export const TransparentBackgroundContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: ${(props) => props.position || ""};
  top: 0;
  left: 0;
  background: #000000b5;
  // background: #000;
`;

export const TitleContainer = styled(motion.div)`
  padding: 0 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: transparent;
`;

export const Title = styled(motion.div)`
  font-family: ${(props) => props.fontFamily};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
  font-size: ${(props) =>
    (props.ScreenWidth > 768 ? props.fontSize : props.fontSizeMob) || ""};
  color: ${(props) => props.color};
`;
