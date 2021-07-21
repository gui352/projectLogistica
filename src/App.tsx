import React from "react";

import GlobalStyle from "./styles/global";

import SigIn from "./pages/Sigin";

const App: React.FC = () => {
  return(
    <>
      <SigIn/>
      <GlobalStyle/>
    </>
  );
};

export default App;