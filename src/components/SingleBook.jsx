import { Component } from "react"
import { Card } from "react-bootstrap"
import CommentArea from "./CommentArea"

class SingleBook extends Component {
  state = {
    selected: false,
  }
  toggleSelected = () => {
    this.setState({ selected: !this.state.selected })
  }

  render() {
    const { book } = this.props

    return (
      <Card
        onClick={this.toggleSelected}
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
        {this.state.selected && (
          <div onClick={(e) => e.stopPropagation()}>
            <CommentArea bookId={book.asin} />
          </div>
        )}
      </Card>
    )
  }
}

export default SingleBook
