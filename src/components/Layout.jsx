import React from "react";
import { NavLink } from "react-router-dom";
const Layout = ({ children }) => (
    <div className="layout">
    <header>
    <nav className="navbar">
      <div className="navbar-inside">
        <span className="brand">
          <NavLink to="/">NVC Training Center</NavLink>
        </span>
        <ul className="navbar-nav">
          <li>
            <NavLink to="/">หน้าหลัก</NavLink>
          </li>
          <li>
            <NavLink to="/course">หลักสูตรที่เปิดสอน</NavLink>
          </li>
          <li>
            <NavLink to="/contact">ติดต่อ</NavLink>
          </li>
        </ul>
      </div>
    </nav>

    </header>
    <main>{children}</main>
<footer>
    <p>&copy;สุปรียา กะลำพัก 66402040018 </p>
</footer>
</div>
);
export default Layout;