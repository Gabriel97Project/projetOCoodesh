import { styled } from "styled-components";


export const BodyStyled= styled.div`

  background-color: #f0f5f5;
  max-width: 1400px;
  width:90%;
  height:600px;
  border: solid 1px;
  border-color:#eeeee4;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  @media (max-width: 600px) {

    display:flex;
    flex-direction:column;
    justify-content:center;
  }
`

export const BodyInboxStyled = styled.div`

  width: 35%;
  height: 95%;
  border: 1px solid black;
  border-color:#eeeee4;
  background-color: white;
  #WelcomeInboxText{

    width:100%;
    height:30px;
    border-bottom: solid 2px;
    border-color:#eeeee4;
    margin-left:10px;
  }
  .InboxMailCheck{

    margin: 0px;
    margin-left:5px;
  }
  @media (max-width: 600px) {
      
    width: 100%;
    height:150px;
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
`

export const BodyMailStyled = styled.div`

  width: 65%;
  height: 95%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  #MailContent{

    background-color: white;
    width:99%;
    height:85%;
    border: solid 1px;
    border-color:#eeeee4;
    overflow:auto;
 
  };
  .WelcomeMailText{

    margin-top:52px;
    border-top: 2px solid black;
    border-color:#eeeee4;
    width:100%;
    font-weight: bold;
    display:flex;
    justify-content:space-between;
    p{
      margin-left:5px;
    }
  }
    @media (max-width: 600px) {
      
      width: 100%;
      #MailContent{
        height:100%;
      }
      .WelcomeMailText{
        margin-top: 15px;
      }
    }

`

export const MailCheckButtonStyle = styled.div`

  width:100%;
  height:40px;
  border: solid 1px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:#d1d1d1;

`