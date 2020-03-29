import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FaBars,FaTimes } from 'react-icons/fa';
import React,{useState} from "react"
import "./Header.scss";

const ListLink = props => (
  <li>
    <Link to={props.to} activeClassName="menu-active">{props.children}</Link>
  </li>
)
const Header = ({ siteTitle }) => {
  const [showMenu,setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (<header>
    <div id="header-container" className="container">
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>dytra</h3>
      </Link>
      <ul className={showMenu ? "force-show" : ""}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/portofolio">Portofolio</ListLink>
      </ul>
  <a id="burger-button" onClick={toggleMenu}>{showMenu ? <FaTimes/> : <FaBars />}</a>

    </div>
  </header>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
