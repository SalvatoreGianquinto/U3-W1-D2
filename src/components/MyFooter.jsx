import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container fluid>
        <Row>
          <Col md={4} className="text-center text-md-start">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} EpiBooks. Tutti i diritti
              riservati.
            </p>
          </Col>
          <Col md={4} className="text-center text-md-center">
            <a href="#" className="text-light me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-light">
              Terms of Service
            </a>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <a href="#top" className="text-light">
              Salta in cima
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
