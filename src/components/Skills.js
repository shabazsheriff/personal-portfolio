import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Specialize, SpecializeImageText } from "../styles/HeroBannerStyles";
import { StaggerChildren, AnimateLeft, fadeIn } from "../Data/FramerMotion";

import { Image } from "../styles/GlobalStyles";

//Images
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PlainText = styled(motion.div)`
  font-size: 18px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

function Skills({ SkillsHead, DirectTo, skills, setSkills, Specializations }) {
  return (
    <>
      <Specialize>
        <motion.div
          className="specialize__head"
          variants={fadeIn(0.9, 0.5)}
          initial="initial"
          animate="animate"
        >
          {SkillsHead}
        </motion.div>

        <motion.div
          className="specialize__inner"
          variants={StaggerChildren(1.2, 0.19)}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {Specializations &&
            Specializations.map((item, i) => (
              <motion.div
                key={i}
                variants={AnimateLeft}
                exit="exit"
                className="specialize__image--container"
              >
                <Image src={item.image}></Image>
                <SpecializeImageText className="specialize__image--text">
                  {item.skill}
                </SpecializeImageText>
              </motion.div>
            ))}
          {/* <br /> */}
          <PlainText
            className="static__skills"
            variants={AnimateLeft}
            onClick={() => setSkills(!skills)}
          >
            {DirectTo}
            {/* <br /> */}
            <ArrowForwardIosIcon style={{ fontSize: "40px" }} />
          </PlainText>
        </motion.div>
      </Specialize>
    </>
  );
}

export default Skills;
