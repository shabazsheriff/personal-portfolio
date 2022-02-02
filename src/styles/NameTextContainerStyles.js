import styled from "styled-components";
import { motion } from "framer-motion";

export const NameTextContainer = styled.div`
  height: calc(56vh);
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 50px;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(0, 0, 0, 0.6391150210084033) 20%,
    rgba(0, 0, 0, 0.6783307072829132) 66%,
    rgba(0, 0, 0, 0.7007396708683473) 100%
  );
`;

export const NameText = styled(motion.div)`
  width: 100%;
  text-align: center;
`;
