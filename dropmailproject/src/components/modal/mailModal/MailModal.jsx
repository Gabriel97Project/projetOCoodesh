import { ModalBackgroundStyled, ModalCloseButtonStyled, ModalMainBackgroundStyled } from "./MailModalStyle";



export default function MailModal({ closeModal, selectedMailState }) {

  const firstLine = selectedMailState.text.split('\r')[0];

  return (
    <ModalBackgroundStyled>
    <ModalMainBackgroundStyled>
      <ModalCloseButtonStyled onClick={closeModal}>X</ModalCloseButtonStyled>
      {selectedMailState && (
        <div id="mailContentModalStyle">
          <p id="mailTextFromStyle" >De: {selectedMailState.fromAddr}</p>
          <p id="mailTextSubjectStyle" >Assunto: {selectedMailState.headerSubject}</p>
          <p id="mailTextContentStyle">{firstLine}</p>
        </div>
      )}
    </ModalMainBackgroundStyled>
  </ModalBackgroundStyled>
  )
};