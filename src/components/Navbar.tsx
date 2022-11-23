import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav>
        <div className="nav-wrapper padx1">
        <a href="#" className="brand-logo">Logo</a>
        <ul className="right hide-on-med-and-down">
            <li><a href='/1'>Sass</a></li>
            <li><a href="/2">Components</a></li>
        </ul>
        </div>
  </nav>
  )
}

export default Navbar