import { ButtonCopyStyled, EmailInputStyled, HeaderStyle, RefreshButtonStyled } from "./HeaderStyle";
import { LuCopy } from "react-icons/lu";
import { FiRotateCw } from "react-icons/fi";
import axios from 'axios';
import { useState } from "react";


export default function Header({ setSessionIdState, setMailBoxState }) {

  const [emailState, setEmailState] = useState(localStorage.getItem('userEmail') || 'Gerador de E-mails');
  

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

      setMailBoxState([]);

      const session = response.data.data.introduceSession;

      const address = session.addresses[0].address;

      setEmailState(address);
      localStorage.setItem('userEmail', address);
       localStorage.setItem('sessionIdState', session.id); 

      if (session.id && session.expiresAt) {
        localStorage.setItem('sessionData', JSON.stringify(session));
        setSessionIdState(session.id);
      }
      const expirationCheckInterval = setInterval(() => {
        const now = new Date().toISOString();
        if (now > session.expiresAt) {
          // Remover dados do localStorage se o e-mail expirou
          clearInterval(expirationCheckInterval);
          localStorage.removeItem('userEmail');
          localStorage.removeItem('sessionIdState');
          localStorage.removeItem('sessionData');
          setSessionIdState(null);
        }
      }, 60000);
    } catch (error) {
      console.error('Erro na solicitação:', error.message);
    }
  }
  

  const copyToClipboard = () => {
    emailState && emailState.length > 1 ? navigator.clipboard.writeText(emailState) : console.log("Sem email disponivel;");
  };

  return (
    <HeaderStyle>
      <p>Your temporary email adress</p>
      <div id="EmailInputAndButtontStyle">
        <EmailInputStyled type="email" placeholder={emailState} readOnly />
        <ButtonCopyStyled onClick={copyToClipboard}><LuCopy /> Copy</ButtonCopyStyled>
      </div>
      <div id="RefreshEmailStyle">
        <RefreshButtonStyled onClick={generatingRandomEmails}>
          <FiRotateCw className="FiRotateCwStyle" />
        </RefreshButtonStyled>
        {emailState && emailState.length > 1 ? <p>Refresh</p> : <p>Generate email</p>}

      </div>

    </HeaderStyle>

  )

};

