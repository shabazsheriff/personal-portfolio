import React, { useState } from "react";

import { motion, useMotionValue } from "framer-motion";
import { ScreenSize } from "../Hooks/ScreenWidth";
import {
  AnimateModal,
  StaggerChildren,
  StaggerChildrenItem,
  fadeIn,
} from "../Data/FramerMotion";
import { useClickOutside } from "../Data/Functions";
import {
  ScrollMarkContainer,
  ShowConnectContainer,
  SocialStagger,
} from "../styles/HeroBannerStyles";

import Skills from "./Skills";

//Images
import Analysis from "../Images/analysis-unit-testing.png";
import FrontendDevelopment from "../Images/frontend-development.png";
import MobileDevelopment from "../Images/mobile-development.png";
import SoftwareDevelopment from "../Images/software-development.png";
import UserExperience from "../Images/user-experience.png";
import ReactImg from "../Images/react.png";
import Html from "../Images/html.png";
import Css from "../Images/css.png";
import JavaScript from "../Images/java-script.png";
import Next from "../Images/next-js.svg";

//Material Icons
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function SocialInfo({ showConnect, setShowConnect }) {
  const [, ScreenHeight] = ScreenSize();
  const [elasticity, setElasticity] = useState(1.8);
  const [skills, setSkills] = useState(false);
  const y = useMotionValue(0);
  let menuRef = useClickOutside(() => {
    setShowConnect(false);
  });

  const Expertise = [
    {
      image: SoftwareDevelopment,
      skill: "Software Developer",
    },
    {
      image: FrontendDevelopment,
      skill: "Frontend Development",
    },
    {
      image: MobileDevelopment,
      skill: "Mobile Development",
    },
    {
      image: UserExperience,
      skill: "UI & UX",
    },
    {
      image: Analysis,
      skill: "Analysis & Unit testing",
    },
  ];

  const TechnicalSkills = [
    {
      image: ReactImg,
      skill: "React",
    },
    {
      image: Next,
      skill: "Next JS",
    },
    {
      image: Html,
      skill: "HTML",
    },
    {
      image: Css,
      skill: "CSS",
    },
    {
      image: JavaScript,
      skill: "JavaScript",
    },
  ];

  return (
    <>
      <ShowConnectContainer
        ref={menuRef}
        drag={"y"}
        dragConstraints={{
          left: 0,
          top: ScreenHeight < 720 ? -70 : ScreenHeight < 650 ? -200 : 0,
          right: 0,
          bottom: 0,
        }}
        dragElastic={elasticity}
        variants={AnimateModal(ScreenHeight)}
        initial="initial"
        animate="animate"
        exit="exit"
        y={y}
        onDrag={function () {
          y.get() >= 0 ? setElasticity(1.8) : setElasticity(0.03);
        }}
        onDragEnd={function () {
          if (y.get() > 50) {
            // console.log(y.get());
            setShowConnect(!showConnect);
          }
        }}
      >
        <ScrollMarkContainer>
          <span className="scroll-mark"></span>
        </ScrollMarkContainer>
        <div className="connect-data__inner">
          <motion.div
            className="connect-data__head"
            variants={fadeIn(0.9, 0.5)}
            initial="initial"
            animate="animate"
          >
            Let's Connect
          </motion.div>
          <SocialStagger
            variants={StaggerChildren(1.2, 0.19)}
            initial="initial"
            animate="animate"
          >
            <motion.a
              href="https://www.linkedin.com/in/shabaz-shariff-8520a680"
              variants={StaggerChildrenItem}
            >
              <IconButton color="primary" aria-label="LinkedIn" size="large">
                <LinkedInIcon style={{ fontSize: "40px" }} />
              </IconButton>
            </motion.a>
            <motion.a
              href="mailto:shabazsheriff@gmail.com?subject=| Portfolio" //shabazsharifftag@gmail.com
              variants={StaggerChildrenItem}
            >
              <IconButton
                style={{ color: "#000" }}
                aria-label="mail"
                size="large"
              >
                <EmailIcon style={{ fontSize: "40px" }} />
              </IconButton>
            </motion.a>
          </SocialStagger>
        </div>

        {skills === false ? (
          <Skills
            Specializations={Expertise}
            SkillsHead="Expertise"
            DirectTo="Technical Skills"
            skills={skills}
            setSkills={setSkills}
          />
        ) : (
          <>
            <Skills
              Specializations={TechnicalSkills}
              SkillsHead="Technical Skills"
              DirectTo="Expertise"
              skills={skills}
              setSkills={setSkills}
            />
          </>
        )}
      </ShowConnectContainer>
    </>
  );
}

export default SocialInfo;
