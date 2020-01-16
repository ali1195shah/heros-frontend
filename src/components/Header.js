import React from 'react';
import { Link } from 'react-router-dom'
import './style/Navbar.scss'


const Navbar = (props) => {
    return (
        <div className="topnav">
           
              <Link to='/'>
                <button className="glow-on-hover" type="button"><img onClick={ props.goBack } src='https://heroesvvillains.com/image/cache/Heroes_v_Villains_Tab-600x315.png' alt="logo"/></button>
              </Link>
                

               
              <Link to='/new-sv'>
                <button className="glow-on-hover" type="button">New Super/Villain</button>
              </Link>

              

                 
                {/* <Link to='/edit-profile'>
                    <button className="glow-on-hover" type="button">Edit Profile</button>
                </Link> */}

              
               
              {/* <Link to='/temp1'>
                <button className="glow-on-hover" type="button">Sign Out</button>
              </Link> */}
              

               
              {/* <div className="search__container">
                  <input className="search__input" type="text" placeholder="Search" />
              </div> */}
                
            </div>

//         <>
//   <Navbar bg="dark" variant="dark">
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-info">Search</Button>
//     </Form>
//   </Navbar>
//   <br />
//   <Navbar bg="primary" variant="dark">
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-light">Search</Button>
//     </Form>
//   </Navbar>

//   <br />
//   <Navbar bg="light" variant="light">
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-primary">Search</Button>
//     </Form>
//   </Navbar>
// {/* </> */}
    );
}

export default Navbar;
// -=-=-=-=-=-=-=-
















// import React from 'react';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style/Navbar.scss'
// import { Link } from 'react-router-dom'


// const Header = (props) => {
//   return (
//     <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
      
//     <Link to='/' className="hover-shadow hover-color">Home</Link>

//     <Link to='/new-sv' className="hover-shadow hover-color">
//        New Super/Villain
// </Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>
//   )
// }

// export default Header;
