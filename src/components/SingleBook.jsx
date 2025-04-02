import React, { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  toggleSelection = () => {
    this.setState((prevState) => ({
      selected: prevState.selected === false ? true : false,
    }))
  }

  render() {
    const { book } = this.props

    return (
      <Card
        key={book.asin}
        className={`m-3 ${
          this.state.selected ? "border border-danger border-3" : ""
        }`}
        style={{ cursor: "pointer" }}
      >
        {/* Clicca sulla copertina per cambiare lo stato (selected) */}
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          onClick={this.toggleSelection}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title> {/* Titolo del libro */}
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
