import PropTypes from 'prop-types'
import React from 'react'
import Backgroundimg from './backgroundimg.js';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
      <Backgroundimg        
        fileName="header_bg.jpg" 
        bgTitle="Buscando Mejorar"
        bgSubtitle="Sigue lo que te hace Feliz"     
      >      
      </Backgroundimg>         
      <Navbar expand="sm">
          <div class="navbar navbar-expand-lg navbar-light bg-light">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav>
                <NavItem>
                  <NavLink href="/">INICIO</NavLink>
                </NavItem>   
                <NavItem>
                  <NavLink href="/about">ACERCA DE MI</NavLink>
                </NavItem>                             
              </Nav>
            </Collapse>
          </div>
      </Navbar>      
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
