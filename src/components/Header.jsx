import moon from "../assets/icon-moon.svg"


function Header() {
  return (
    <div className="header">
    <h1 className="logo">TODO</h1>

    <div className="theme">
      <img src={moon} alt="" />
    </div>
  </div>
  )
}

export default Header