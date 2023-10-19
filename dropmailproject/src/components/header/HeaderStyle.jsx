import styled from "styled-components";



export const HeaderStyle = styled.div`
  
  max-width: 1500px;
  width:98%;
  height: 200px;
  border: solid 1px;
  border-color:#eeeee4;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  #EmailInputAndButtontStyle{

    display:flex;
    flex-direction:row;
    width:40%;
  }
  #RefreshEmailStyle{

    margin-top:10px;
    width:40%;
    display:flex;
    flex-direction:row;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  p{
    width:40%;
    margin: 5px;
    
  }
  @media (max-width: 768px) {

    #EmailInputAndButtontStyle{ 
      width:60%;
    }
    #RefreshEmailStyle{
      width:60%;
    }
    p{
      width:60%;
    }
  }
  @media (max-width: 600px) {
    height: 250px;
    
    #EmailInputAndButtontStyle{
      width:90%;
    }
    #RefreshEmailStyle{
      width:90%;
    }
    p{
      width:90%;
    }
  
  }
`

export const ButtonCopyStyled= styled.button`

  border: 2px solid;
  border-color:#eeeee4;
  background-color:white;
  @media (max-width: 600px) {
      
    
        
        width:20%;
     
    }

`

export const EmailInputStyled = styled.input`

  border: 2px solid;
  border-color:#eeeee4;
  width:70%;
  height:35px;
  @media (max-width: 768px) {
      

      width:90%;
   
  }
  @media (max-width: 600px) {
      
      width: 90%;
    
    }

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