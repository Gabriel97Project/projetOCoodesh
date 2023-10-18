import { useEffect, useState } from "react";
import { BodyInboxStyled, BodyMailStyled, BodyStyled } from "./BodyStyle";
import axios from "axios";
import MailModal from "./MailModal";



export default function Body({ sessionIdState }) {

  const [mailBoxState, setMailBoxState] = useState('');
  const [modalState,setModalState] = useState(false);
  const [selectedMailState, setSelectedMailState] = useState('');

  const authToken = 'web-test-20231015VyPmh777';
  const apiUrl = `/api/graphql/${authToken}`;

  useEffect(() => {
    const  getEmailData = async () => {
      try {
        const response = await axios.post(apiUrl, {
          query: `
            query {
              session(id:"${sessionIdState}") {
                mails {
                  rawSize,
                  fromAddr,
                  toAddr,
                  downloadUrl,
                  text,
                  headerSubject
                }
              }
            }
          `,
        });
  
        const sessionData = response.data.data.session;
        console.log('Dados brutos da sessãoooooooooooooooo:', sessionData);
  
        const responseData = response.data;
        console.log('Resposta da API GraphQLllllllllllllll:', responseData);
  
        setMailBoxState(response.data.data.session.mails, 'resposta do meu state');
  
        // Faça o que quiser com os dados, como armazená-los no estado, exibi-los, etc.
      } catch (error) {
        console.error('Erro na solicitação:', error.message);
      }
    };
  
    // Chame a função fetchData quando o sessionIdState mudar
    getEmailData();
  }, [sessionIdState]);
  const getEmailData = async () => {
    try {

      const response = await axios.post(apiUrl, {
        query: `
          query {
            session(id:"${sessionIdState}") {
              mails {
                rawSize,
                fromAddr,
                toAddr,
                downloadUrl,
                text,
                headerSubject
              }
            }
          }
        `,
      });

      const sessionData = response.data.data.session;
      console.log('Dados brutos da sessãoooooooooooooooo:', sessionData);

      const responseData = response.data;
      console.log('Resposta da API GraphQLllllllllllllll:', responseData);



      setMailBoxState(response.data.data.session.mails, 'resposta do meu state');

      // Faça o que quiser com os dados, como armazená-los no estado, exibi-los, etc.
    } catch (error) {
      console.error('Erro na solicitação:', error.message);
    }
  };
  useEffect(() => {
    // Código que depende do valor atualizado de sessionIdState
    console.log(sessionIdState, 'dados da sessaooooooooooooooooooo');
    console.log('Dados do e-mail:', mailBoxState);
    getEmailData()
  }, [sessionIdState]);
 
  const modalOpen = (mailsDataUnit) => {
    setModalState(true);
    setSelectedMailState(mailsDataUnit);
    
  };

 console.log(selectedMailState,"select state")
    return (
    <BodyStyled>
      <BodyInboxStyled>
        <p id="WelcomeInboxText">Inbox</p>
        <p className="InboxMailCheck" style={{ fontWeight: "bold" }}>Hello</p>
        <p className="InboxMailCheck" style={{ color: "blue", fontWeight: "bold" }}>welcome</p>
        <p className="InboxMailCheck">your temp e-mail adress is ready...</p>
      </BodyInboxStyled>
      <BodyMailStyled>
        <div className="WelcomeMailText">
          <p>E-mails recebidos</p>
          <button onClick={getEmailData}>Atualizar caixa de entrada</button>
        </div>
        <div id="MailContent">
        {mailBoxState ? (
          <table id="mailTableStyle" style={{width:'100%'}}>
            <tbody>
              
              {mailBoxState.map((mailsDataUnit, index) => (
                <tr key={index} >
                  <td><button id="mailCheckButtonStyle" onClick={()=>{modalOpen(mailsDataUnit)}}>{mailsDataUnit.fromAddr}</button> </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>CAIXA VAZIA</p>
        )}
        {modalState && (
        <MailModal closeModal={() => setModalState(false)} selectedMailState={selectedMailState} />
      )}
      </div>
       {/*   <div id="MailContent">
          {mailBoxState.mails ?
            <button id="mailCheckButtonStyle">
              {mailBoxState.mails.map((mailsUnit) => {
                return mailsUnit.fromAddr
              })}
            </button> :
            <p>CAIXA VAZIA</p>
          }
        </div>  */}
      </BodyMailStyled>
    </BodyStyled>
  )
  }

  
