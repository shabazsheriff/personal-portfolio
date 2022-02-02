//Style Components
import { TransparentBackgroundContent } from "../styles/GlobalStyles";
import { AnimateBackground } from "../Data/FramerMotion";

function TransparentBackground({ children }) {
  // styles
  const TransparentBackgroundStyle = {
    position: "absolute",
  };
  // styles end

  return (
    <TransparentBackgroundContent
      className="Transparent-Background"
      variants={AnimateBackground}
      initial="hidden"
      animate="visible"
      exit="exit"
      {...TransparentBackgroundStyle}
    >
      {children}
    </TransparentBackgroundContent>
  );
}

export default TransparentBackground;
