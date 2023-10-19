import styled from "styled-components";



export const HeaderStyle = styled.div`
  //background-color:yellow;
  max-width: 1500px;
  width:98%;
  height: 200px;
  border: solid 1px;
  border-color:#eeeee4;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  #EmailAndInputStyle{
    display:flex;
    flex-direction:row;
    width:40%;
  }
  #RefreshEmailStyle{
    margin-top:10px;
    width:40%;
    display:flex;
    flex-direction:row;
    #RefreshTimingStyle{
      width:25px;
      height:25px;
      border-radius:100%;
      border: solid 2px;
      border-color:#eeeee4;
      margin-right:10px;
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:center;

    }
  }
  p{
    width:40%;
    margin: 5px;

    //background-color:red;
  }
  
`

export const ButtonCopyStyled= styled.button`

  border: 2px solid;
  border-color:#eeeee4;
  background-color:white;

`

export const EmailInputStyled = styled.input`

  border: 2px solid;
  border-color:#eeeee4;
  width:70%;
  height:35px;

`


export const RefreshButtonStyled = styled.button`

  border-radius:100%;
  width:30px;
  height:30px;
  background-color:white;
  border: 2px solid;
  border-color:#eeeee4;
  display:flex;
  align-items:center;
  justify-content:center;
  .FiRotateCwStyle{
   
    width:100%;
    height:100%;
    z-index: 1;

  } 

`