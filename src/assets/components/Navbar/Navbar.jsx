import "./Navbar.scss"
import logo from "../../../images/rocket.png"

const Navbar = () => {
  return (
    <header className="header">
        <nav className="nav">
            <div className="text"><img src={logo} alt="" /><p><span className="to">to</span> <span className="do">do</span></p></div>
        </nav>
    </header>
  )
}

export default Navbar