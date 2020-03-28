import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.scss";
const ListLink = props => (
  <li>
    <Link to={props.to} activeClassName="menu-active">{props.children}</Link>
  </li>
)
const Header = ({ siteTitle }) => {
  return (<header>
    <div id="header-container" style={{paddingLeft:'2em'}} >
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>dytra's note</h3>
      </Link>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/portofolio">Portofolio</ListLink>
      </ul>

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
