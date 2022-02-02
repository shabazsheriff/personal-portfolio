import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Content from "./Content";

// Styled components
import { Image, Container } from "../styles/GlobalStyles";
import { HeroBannerContent } from "../styles/HeroBannerStyles";

//Images
import BannerImage from "../Images/BannerImage.jpg";
import HeroImage1 from "../Images/hero-image-1.jpg";
import TransparentBackground from "./TransparentBackground";

//Material UI
import Button from "@mui/material/Button";
import SocialInfo from "./SocialInfo";
import { fadeIn } from "../Data/FramerMotion";

function HeroBanner() {
  const [showConnect, setShowConnect] = useState(false);
  const ImageStyle = {
    height: "max-content",
    width: "100%",
    padding: "0",
    margin: "0",
    objectFit: "cover",
    objectPosition: "top",
    position: "absolute",
  };

  return (
    <HeroBannerContent>
      <Container fluid>
        <Image
          variants={fadeIn(1.7, 0)}
          initial="initial"
          animate="animate"
          className="Banner-Image"
          src={HeroImage1}
          alt="Banner Image"
          {...ImageStyle}
        />
        <Content>
          <motion.div
            variants={fadeIn(3, 5)}
            initial="initial"
            animate="animate"
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <Button
              style={{
                color: "white",
                border: "3px solid #fff",
                width: "250px",
                margin: "0 auto",
                borderRadius: "5px",
              }}
              variant="outlined"
              onClick={() => {
                setShowConnect(!showConnect);
                document.body.style.overflow = "hidden";
              }}
            >
              Let's Connect
            </Button>
          </motion.div>
        </Content>

        <AnimatePresence exitBeforeEnter>
          {showConnect && (
            <TransparentBackground>
              <SocialInfo
                showConnect={showConnect}
                setShowConnect={setShowConnect}
              />
            </TransparentBackground>
          )}
        </AnimatePresence>
      </Container>
    </HeroBannerContent>
  );
}

export default HeroBanner;
