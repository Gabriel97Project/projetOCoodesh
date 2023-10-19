import { useState } from "react";
import { ModalBackgroundStyled, ModalMainBackgroundStyled } from "./MailModalStyle";



export default function MailModal({ closeModal, selectedMailState }) {


  console.log(selectedMailState, 'select state unit');
  /*   {mailBoxState.mails.map((mailsDataUnit) => {
         setMailsDataUnitState(mailsDataUnit)
      })
       
  }   */

  /* handleMailClick(mailsDataUnit); */
  const firstLine = selectedMailState.text.split('\r')[0];

  return (
    <ModalBackgroundStyled>
    <ModalMainBackgroundStyled>
      <button onClick={closeModal}>X</button>
      {selectedMailState && (
        <div>
          <p>De: {selectedMailState.fromAddr}</p>
          <p>Assunto: {selectedMailState.headerSubject}</p>
          <p>{firstLine}</p>
        </div>
      )}
    </ModalMainBackgroundStyled>
  </ModalBackgroundStyled>
  )
};