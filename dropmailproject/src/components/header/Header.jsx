import { ButtonCopyStyled, EmailInputStyled, HeaderStyle, RefreshButtonStyled } from "./HeaderStyle";
import { LuCopy } from "react-icons/lu";
import { FiRotateCw } from "react-icons/fi";


export default function Header() {
  return (
    <HeaderStyle>
      <p>Your temporary email adress</p>
      <div id="EmailAndInputStyle">
        <EmailInputStyled type="email" placeholder="Aguardando e-mail aleatorio..."/>
        <ButtonCopyStyled><LuCopy/> Copy</ButtonCopyStyled>
      </div>
      <div id="RefreshEmailStyle">
        <p>Autorefresh in ...</p>
        <div id="RefreshTimingStyle">
          5
        </div>
        <RefreshButtonStyled>
          <FiRotateCw className="FiRotateCwStyle"/>
        </RefreshButtonStyled>
        <p>Refresh</p>
      </div>
      
    </HeaderStyle>

  )

};