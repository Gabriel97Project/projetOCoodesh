import { useState } from "react";
import { AppStyledMain } from "./AppStyled";
import Body from "./components/body/Body";
import Header from "./components/header/Header";


function App() {

  const [sessionIdState,setSessionIdState] = useState("");


  return (
   
    <AppStyledMain>
      <Header sessionIdState={sessionIdState} setSessionIdState={setSessionIdState} />
      <Body sessionIdState={sessionIdState}/>
    </AppStyledMain>
    
  
  );
}

export default App;
