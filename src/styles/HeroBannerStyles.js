import styled from "styled-components";
import { motion } from "framer-motion";
import { white, black, LightGray } from "./Colors";

export const HeroBannerContent = styled.div``;

export const ShowConnectContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  background-color: ${LightGray};
  width: 100%;
  padding: 20px;
  // height: 150px;
  border-radius: 50px 50px 0 0;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px 4px #ccc;
  .connect-data {
    &__inner {
      margin-top: 20px;
    }
    &__head {
      color: ${black};
      font-size: 26px;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 8px;
    }
  }
`;

export const ScrollMarkContainer = styled.div`
  width: 100%;
  .scroll-mark {
    display: block;
    background-color: #c0c0c0;
    width: 50px;
    height: 5px;
    border-radius: 999px;
    margin: 0 auto;
  }
`;

export const SocialStagger = styled(motion.div)`
  display: flex;
  margin-left: -15px;
`;

export const SpecializeImageText = styled.div``;

export const Specialize = styled.div`
  .specialize {
    &__head {
      color: ${black};
      font-size: 26px;
      font-weight: bold;
      margin-top: 8px;
    }
    &__inner {
      display: flex;
      flex-wrap: wrap;
      > div {
        flex: 0 0 calc(100% / 3 - 7px);
        text-align: center;
        margin-top: 25px;
        background: #000;
        padding: 25px 5px;
        box-sizing: border-box;
        border-radius: 10px;
        img {
          width: 70px;
          filter: contrast(0) brightness(2);
        }
      }
      > div:nth-child(3n - 1) {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
  ${SpecializeImageText} {
    font-size: 11px;
    text-transform: capitalize;
    color: ${white};
    font-weight: bold;
    margin-top: 15px;
    letter-spacing: 0.5px;
  }
`;
