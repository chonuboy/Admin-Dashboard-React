import "./navbar.css"
import logo from "./admin-panel.png"
import search from "./search.png"
import bell from "./bell -white.png"
import appicon from "./apps.png"
import setting from "./setting.png"
import user from "./erik-lucatero-d2MSDujJl2g-unsplash.jpg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="No img" />
        <span>Chonu's Dashboard</span>
      </div>
      <div className="icons">
        <img src={search} alt="" className="icon__outer" />
        <img src={appicon} alt="" className="icon__outer" />
        <div className="notification">
          <img src={bell} alt="" className="icon" />
          <span>1</span>
        </div>

        <div className="user">
          <img src={user} alt="" className="user_icon"/>
          <span>Chonu</span>
        </div>
        <img src={setting} alt="" className="icon__outer" />
      </div>
    </div>
  )
}

export default Navbar