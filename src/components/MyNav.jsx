import { Container, Nav, Navbar } from "react-bootstrap"

const MyNav = function (props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={props.tema}
      data-bs-theme={props.tema}
    >
      <Container fluid>
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#"> About and Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
