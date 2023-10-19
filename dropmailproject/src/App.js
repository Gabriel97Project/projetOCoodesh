import { useEffect, useState } from "react";
import { AppStyledMain } from "./AppStyled";
import Body from "./components/body/Body";
import Header from "./components/header/Header";


function App() {

  const [sessionIdState,setSessionIdState] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    // Solicitar permissões de notificação quando a página é carregada
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        setNotificationsEnabled(true);
      }
    });
  }, []);
  return (
   
    <AppStyledMain>
      <Header sessionIdState={sessionIdState} setSessionIdState={setSessionIdState} />
      <Body sessionIdState={sessionIdState} setSessionIdState={setSessionIdState}/>
    </AppStyledMain>
    
  
  );
}

export default App;
