import React from 'react'
import { Link } from 'gatsby'

import './menu.css'

const Menu = () => {
  return (
    <section className="menu__section">
      <ul className="menu">
        <li>
          <Link
            to="/"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/talks"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            Talks
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            Blog
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Menu
