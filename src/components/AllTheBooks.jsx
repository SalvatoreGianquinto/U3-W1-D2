import { Card, Container, Row, Col } from "react-bootstrap"
import books from "../data/horror.json"

const AllTheBooks = function () {
  return (
    <Container className="mt-4">
      <Row>
        {books.map((book, i) => (
          <Col key={i} md={4} lg={3} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  CATEGORIA:<strong> {book.category}</strong>
                </Card.Text>
                <Card.Text>
                  PREZZO: <strong>{book.price}€</strong>
                </Card.Text>
                <Card.Text>{book.asin}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllTheBooks
