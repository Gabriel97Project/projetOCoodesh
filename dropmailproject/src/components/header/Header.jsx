import { ButtonCopyStyled, EmailInputStyled, HeaderStyle, RefreshButtonStyled } from "./HeaderStyle";
import { LuCopy } from "react-icons/lu";
import { FiRotateCw } from "react-icons/fi";
import axios from 'axios';


export default function Header() {
  return (
    <HeaderStyle>
      <p>Your temporary email adress</p>
      <div id="EmailAndInputStyle">
        <EmailInputStyled type="email" placeholder="Aguardando e-mail aleatorio..."/>
        <ButtonCopyStyled><LuCopy/> Copy</ButtonCopyStyled>
      </div>
      <div id="RefreshEmailStyle">
        <p>Autorefresh in ...</p>
        <div id="RefreshTimingStyle">
          5
        </div>
        <RefreshButtonStyled>
          <FiRotateCw className="FiRotateCwStyle"/>
        </RefreshButtonStyled>
        <p>Refresh</p>
      </div>
      
    </HeaderStyle>

  )

};


  const authToken =  'web-test-20231015VyPmh777';
  const apiUrl = `https://cors-anywhere.herokuapp.com/https://dropmail.me/api/graphql/${authToken}`;


  const generatingRandomEmails  = async () => {
    try {
      const response = await axios.post(apiUrl, {
        query: `
          mutation {
            introduceSession {
              id
              addresses {
                address
              }
            }
          }
        `,
      });
  
      const session = response.data.data.introduceSession;
      const address = session.addresses[0].address;
  
      console.log(`E-mail gerado: ${address}`);
    } catch (error) {
      console.error('Erro na solicitação:', error.message);
    }
  };
generatingRandomEmails();