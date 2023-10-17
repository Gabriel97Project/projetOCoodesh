import { ModalBackgroundStyled, ModalMainBackgroundStyled } from "./MailModalStyle";



export default function MailModal({closeModal,mailBoxStategit }){



  return(
    <ModalBackgroundStyled>
      <ModalMainBackgroundStyled>
        <button onClick={closeModal}>X</button>
      </ModalMainBackgroundStyled>
    </ModalBackgroundStyled>
  )
};