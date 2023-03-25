import { useState } from "react"
import moon from "../assets/icon-moon.svg"
import sun from "../assets/icon-sun.svg"


function Header() {
  const [icon, setIcon] = useState(moon)
  function changeTheme(){
    setIcon(()=> icon == moon? sun : moon)
    document.body.classList.contains("light") ? document.body.classList = "dark" : document.body.classList = "light"
  }
  return (
    <div className="header">
    <h1 className="logo">TODO</h1>

    <div 
    onClick={changeTheme}
    className="theme">
      <img src={icon} alt="" />
    </div>
  </div>
  )
}

export default Header