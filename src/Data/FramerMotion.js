export const container = {
  visible: {
    transition: {
      delayChildren: 1.7,
      staggerChildren: 0.025,
    },
  },
};

export const parent = {
  initial: { y: 800 },
  animate: {
    y: 0,
    transition: {
      delayChildren: 1.7,
      staggerChildren: 0.4,
    },
  },
};

export const child = {
  initial: { y: 800 },
  animate: {
    y: 0,
    transition: {
      duration: 2.5,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export const AnimateBackground = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.1, duration: 0.2, ease: "easeInOut" },
  },
};

export const AnimateModal = (ScreenHeight) => {
  return {
    initial: { y: "100vh", opacity: 0 },
    animate: {
      y: "0px",
      bottom: ScreenHeight < 740 ? -70 : ScreenHeight < 670 ? -200 : 0,
      opacity: 1,
      transition: { delay: 0.2, type: "tween" },
    },
    exit: { y: "100vh", transition: { ease: "easeInOut" } },
  };
};

export const StaggerChildren = (delayChildren, staggerChildren) => {
  return {
    initial: {},
    animate: {
      transition: {
        delayChildren: delayChildren,
        // 1.2,
        staggerChildren: staggerChildren,
        // 0.19,
      },
    },
  };
};

export const StaggerChildrenItem = {
  initial: {
    opacity: 0,
    transform: "scale(0)",
  },
  animate: {
    opacity: 1,
    scale: [0, 1, 1.5, 1],
  },
};

export const AnimateLeft = {
  initial: {
    x: "-15px",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export const fadeIn = (duration, delay) => {
  return {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: delay,
        y: { type: "spring", stiffness: 150 },
        default: { duration: duration },
      },
    },
  };
};

// export const fadeIn = (i) => {
//   return {
//     start: { opacity: 0, translateX: 50, translate: -50 },
//     end: {
//       opacity: 1,
//       translateX: 0,
//       translateY: 0,
//       transition: { duration: 0.3, delay: 0.2 },
//     },
//   };
// };
