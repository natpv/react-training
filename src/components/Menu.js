import React from "react";
import { NavLink } from "react-router-dom";
const MENU_DATA = [
  { menuLink: "/", menuText: "Home" },
  { menuLink: "/products", menuText: "Products" },
  {menuLink: "/forms", menuText:"Test Form"}
];
function Menu(props) {
  return (
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      {MENU_DATA.map((item) => (
        <li class="nav-item" key={item.menuText}>
          <NavLink className="nav-link" to={item.menuLink}>
            {item.menuText}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
export default Menu;