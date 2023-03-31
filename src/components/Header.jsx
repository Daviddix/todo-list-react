import { useLayoutEffect, useState } from "react"
import moon from "../assets/icon-moon.svg"
import sun from "../assets/icon-sun.svg"


function Header() {
  const [icon, setIcon] = useState(()=> localStorage.getItem("todo-list-theme") == "light"? moon : sun || sun)
  const [theme, setTheme] = useState(()=> localStorage.getItem("todo-list-theme") || "dark")

  useLayoutEffect(()=>{
    if (theme == "dak") {
      document.body.classList = "dark"
    }else if(theme == "light"){
      document.body.classList = "light"
    }
  }, [theme])

  function changeTheme(){
    setIcon(()=> icon == moon? sun : moon)
    localStorage.setItem("todo-list-theme", icon == sun? "light" : "dark")
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