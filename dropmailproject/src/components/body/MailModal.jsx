import { ModalBackgroundStyled, ModalMainBackgroundStyled } from "./MailModalStyle";



export default function MailModal({closeModal,mailBoxState}){



  return(
    <ModalBackgroundStyled>
      <ModalMainBackgroundStyled>
        <button onClick={closeModal}>X</button>
      </ModalMainBackgroundStyled>
    </ModalBackgroundStyled>
  )
};