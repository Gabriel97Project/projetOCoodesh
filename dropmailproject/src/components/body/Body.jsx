import { useEffect, useState } from "react";
import { BodyInboxStyled, BodyMailStyled, BodyStyled, MailCheckButtonStyle } from "./BodyStyle";
import axios from "axios";
import MailModal from "../modal/mailModal/MailModal";




export default function Body({ sessionIdState, setSessionIdState, mailBoxState, setMailBoxState}) {


  const [modalState, setModalState] = useState(false);
  const [selectedMailState, setSelectedMailState] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);


  const authToken = 'web-test-20231015VyPmh777';
  const apiUrl = `/api/graphql/${authToken}`;

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
      if (sessionData && sessionData.mails) {
        setMailBoxState(sessionData.mails);
        localStorage.setItem('emailData', JSON.stringify(sessionData.mails));
      } else {
        setMailBoxState([]);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error.message);
    }
  };

  useEffect(() => {
    const storedSessionIdState = localStorage.getItem('sessionIdState');
    if (storedSessionIdState) {
      setSessionIdState(storedSessionIdState);
      getEmailData(); 
    }
  }, [setSessionIdState]);

  
  const modalOpen = (mailsDataUnit) => {
    setModalState(true);
    setSelectedMailState(mailsDataUnit);

  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getEmailData();
    }, 15000);
    return () => {
      clearInterval(intervalId);
    };
  }, [sessionIdState]); 


  useEffect(() => {
    if (mailBoxState.length > 0) {
      const lastMail = mailBoxState[mailBoxState.length - 1];
      if (!selectedMailState || lastMail !== selectedMailState) {
        if (notificationsEnabled && document.visibilityState !== 'visible' && !document.hasFocus()) {
          const existingNotification = Notification.currentNotification;
          if (!existingNotification) {
            const notification = new Notification('Novo e-mail recebido', {
              body: `De: ${lastMail.fromAddr}`,
            });
            notification.onclick = () => {
              setSelectedMailState(lastMail);
            };
            Notification.currentNotification = notification;
          }
        }
      }
    }
  }, [mailBoxState, selectedMailState, notificationsEnabled]);

  useEffect(() => {

    const requestNotificationPermission = async () => {
      const permission = await Notification.requestPermission();
      setNotificationsEnabled(permission === 'granted');
    };
    requestNotificationPermission();
  }, []); 

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
        </div>
        <div id="MailContent">
          {mailBoxState ? (
            <table id="mailTableStyle" style={{ width: '100%' }}>
              <tbody>

                {mailBoxState.map((mailsDataUnit, index) => (
                  <tr key={index} >
                    <td><MailCheckButtonStyle onClick={() => { modalOpen(mailsDataUnit) }}>{mailsDataUnit.fromAddr}</MailCheckButtonStyle> </td>
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
      </BodyMailStyled>
    </BodyStyled>
  )
}


