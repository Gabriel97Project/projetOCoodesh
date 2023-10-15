import { BodyInboxStyled, BodyMailStyled, BodyMainStyled, BodyStyled } from "./BodyStyle";

export default function Body(){
  return(
    <BodyStyled>
      <BodyInboxStyled>
        <p id="WelcomeInboxText">Inbox</p>
        <p className="InboxMailCheck" style={{fontWeight:"bold"}}>Hello</p>
        <p className="InboxMailCheck" style={{color:"blue", fontWeight:"bold"}}>welcome</p>
        <p className="InboxMailCheck">your temp e-mail adress is ready...</p>
      </BodyInboxStyled>
      <BodyMailStyled>
        <div className="WelcomeMailText">
          Welcome
        </div>
        <div id="MailContent">
            oooooooooooooooooooooooi
        </div>
      </BodyMailStyled>
    </BodyStyled>
  )
}