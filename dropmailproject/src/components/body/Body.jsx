import { BodyInboxStyled, BodyMailStyled, BodyMainStyled, BodyStyled } from "./BodyStyle";

export default function Body(){
  return(
    <BodyStyled>
      <BodyInboxStyled>
        <h4 id="WelcomeInboxText">Inbox</h4>
        <p className="InboxMailCheck">Hello</p>
        <p className="InboxMailCheck">welcome</p>
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