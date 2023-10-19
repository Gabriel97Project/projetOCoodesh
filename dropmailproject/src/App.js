import { useState } from "react";
import { AppStyledMain } from "./AppStyled";
import Body from "./components/body/Body";
import Header from "./components/header/Header";


function App() {

  const [sessionIdState,setSessionIdState] = useState("");
  const [mailBoxState, setMailBoxState] = useState([]);

  return (
   
    <AppStyledMain>
      <Header setSessionIdState={setSessionIdState} setMailBoxState={setMailBoxState} />
      <Body sessionIdState={sessionIdState} setSessionIdState={setSessionIdState} setMailBoxState={setMailBoxState} mailBoxState={mailBoxState}/>
    </AppStyledMain>
    
  
  );
}

export default App;
