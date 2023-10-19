import { styled } from "styled-components";


export const BodyStyled= styled.div`

  background-color: #f0f5f5;
  max-width: 1500px;
  width:98%;
  height:600px;
  border: solid 1px;
  border-color:#eeeee4;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`

export const BodyInboxStyled = styled.div`

  width: 35%;
  height: 100%;
  border: 1px solid black;
  border-color:#eeeee4;
  background-color: white;
 // background-color: red;
  #WelcomeInboxText{
    width:100%;
    height:30px;
    border-bottom: solid 2px;
    border-color:#eeeee4;
    margin-left:10px;
    
    //background-color:aqua;
  }
  .InboxMailCheck{
    
    margin: 0px;
    margin-left:5px;
  }
`

export const BodyMailStyled = styled.div`
  width: 64.5%;
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  #MailContent{
    background-color: white;
    width:99%;
    height:85%;
    border: solid 1px;
    border-color:#eeeee4;
    #mailCheckButtonStyle{
      width:100%;
      height:40px;
    };
    
    
    
  };
  .WelcomeMailText{
      margin-top:52px;
      border-top: 2px solid black;
      border-color:#eeeee4;
      width:100%;
      font-weight: bold;
      display:flex;
      justify-content:space-between;
      //background-color:aqua;
    }

`