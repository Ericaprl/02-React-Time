import { HeaderContainer } from "./styles";
import logoPage from '../../assets/Logo.svg'
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export  function Header() {
  return (
   <HeaderContainer>
    <img src={logoPage} alt="Page Logo" />

      <nav>
        <NavLink to={"/"} title="Timer">
          <Timer size={24}/>
        </NavLink>

        <NavLink to={"/history"} title="History">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    
   </HeaderContainer>
  )
}
