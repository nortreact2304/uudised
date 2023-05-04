import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Kodu</Link>
          </li>
          <li>
            <Link to="/blogs">Postitused</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/services">Teenused</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <footer>
            See on footer. Võta meiega <Link to="/contact">ühendust</Link>
      </footer>
    </>
  )
};

export default Layout;