import styled from "styled-components";



export const HeaderStyle = styled.div`
  background-color:yellow;
  width:98%;
  height: 200px;
  border: solid 1px;
  border-color:#eeeee4;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  div{
    display:flex;
    flex-direction:row;
    width:40%;
    input{
      width:70%;
      height:35px;
    }
  }
  p{
    width:40%;
    margin: 5px;

    background-color:red;
  }
  
`