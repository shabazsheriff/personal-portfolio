import React from "react";
import HeroBanner from "./components/HeroBanner";
import { ScreenSize } from "./Hooks/ScreenWidth";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  const [ScreenWidth] = ScreenSize();
  return (
    <>
      {ScreenWidth < 480 ? (
        <div className="App-Container">
          <GlobalStyle />
          <HeroBanner />
        </div>
      ) : ScreenWidth < 940 ? (
        <div className="Notify-Display">Rotate Your Phone to Portrait mode</div>
      ) : (
        <div className="Notify-Display">Please switch to mobile device</div>
      )}
    </>
  );
}

export default App;
