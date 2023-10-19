import { styled } from "styled-components";

export const ModalBackgroundStyled = styled.div`

  background-color:rgba(0, 0, 0, 0.8);
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  top: 0;
  left: 0;
  z-index:999;
`;


export const ModalMainBackgroundStyled = styled.div`

  background-color:white;
  width:70%;
  height:60%;
  position: relative;
  overflow: hidden;
 
  #mailContentModalStyle{

    margin-top:100px;
    margin-left:40px;
    #mailTextFromStyle{
      border:solid 1px;
      border-color:transparent;
      background-color:#f7f4dc;
      width:90%;
    }
    #mailTextSubjectStyle{
      background-color:#ebe8e8;
      width:90.2%;
    } 
    #mailTextContentStyle{
      width:90.2%;
      border:solid 1px;
      border-color:#d6d4d4;
      height:300px;
      word-wrap: break-word;
      overflow-y:auto;
    }
  }
  @media (max-width: 600px) {  
    width:90%;
    height:70%;
    #mailTextContentStyle{
   
      height:400px;

    }
  } 

`;


export const ModalCloseButtonStyled = styled.div`
  background-color:#7d0101;
  color: white;
  width:30px;
  height:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  right:0px;
`