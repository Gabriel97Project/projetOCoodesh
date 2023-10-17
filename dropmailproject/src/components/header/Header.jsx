import { ButtonCopyStyled, EmailInputStyled, HeaderStyle, RefreshButtonStyled } from "./HeaderStyle";
import { LuCopy } from "react-icons/lu";
import { FiRotateCw } from "react-icons/fi";
import axios from 'axios';
import { useEffect, useState } from "react";


export default function Header({ sessionIdState, setSessionIdState }) {

  const [emailState, setEmailState] = useState('');
 

  const authToken = 'web-test-20231015VyPmh777';
  const apiUrl = `/api/graphql/${authToken}`;


  const generatingRandomEmails = async () => {
    try {
      const response = await axios.post(apiUrl, {
        query: `
         mutation {
           introduceSession {
             id,
             expiresAt,
             addresses {
               address
             }
           }
         }
       `,
      });

      const session = response.data.data.introduceSession;
      console.log(session,'dados da sessao');
      setSessionIdState(session.id);
      console.log(sessionIdState,'dados da sessaooooooooooooooooooo');
      const address = session.addresses[0].address;

      setEmailState(address);
    } catch (error) {
      console.error('Erro na solicitação:', error.message);
    }
  };
  useEffect(() => { console.log(emailState, 'estado do email') }, [emailState])

  const copyToClipboard = () => {
    emailState && emailState.length > 1 ? navigator.clipboard.writeText(emailState) : console.log("Sem email disponivel;");
  };

  return (
    <HeaderStyle>
      <p>Your temporary email adress</p>
      <div id="EmailAndInputStyle">
        <EmailInputStyled type="email" placeholder={emailState} readOnly />
        <ButtonCopyStyled onClick={copyToClipboard}><LuCopy /> Copy</ButtonCopyStyled>
      </div>
      <div id="RefreshEmailStyle">
        <p>Autorefresh in ...</p>
        <div id="RefreshTimingStyle">
          5
        </div>
        <RefreshButtonStyled onClick={generatingRandomEmails}>
          <FiRotateCw className="FiRotateCwStyle" />
        </RefreshButtonStyled>
        {emailState && emailState.length > 1 ? <p>Refresh</p> : <p>Generate email</p>}

      </div>

    </HeaderStyle>

  )

};

