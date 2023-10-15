import { HeaderStyle } from "./HeaderStyle";



export default function Header() {
  return (
    <HeaderStyle>
      <p>Your temporary email adress</p>
      <div>
        <input type="email" placeholder="Aguardando e-mail aleatorio..."/>
        <button>Copy</button>
      </div>
    </HeaderStyle>

  )

};