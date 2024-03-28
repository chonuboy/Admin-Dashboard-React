import "./menu.css"
import { Link } from "react-router-dom"
import { menu } from "../../data"

const Menu = () => {
  return (
    <div className="menu_item">
      {menu.map(function(item){
        return(
            <div key={item.id}>
              <span className="title">{item.title}</span>
              {item.listitems.map(function(listitem){
                return(
                  <div className="menu__links">
                    <Link to={listitem.url} className="each_items" key={listitem.id}>
                      <img src={listitem.icon} alt="" className="menu_icon" />
                      <span className="title">{listitem.title}</span>
                    </Link>
                  </div>
                )
              })}

            </div>
        )
      })}
    </div>
  ) 
}

export default Menu