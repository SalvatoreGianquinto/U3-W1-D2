import React, { Component } from "react"
import SingleBook from "./SingleBook"

class BookList extends Component {
  state = {
    searchQuery: "",
  }

  handleSearchChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    })
  }

  render() {
    const { books } = this.props
    const { searchQuery } = this.state

    // Filtra i libri in base al titolo che contiene la stringa di ricerca
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
      <div>
        {/* Campo di ricerca */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Cerca un libro..."
          value={searchQuery}
          onChange={this.handleSearchChange}
        />

        {/* Griglia dei libri filtrati */}
        <div className="row">
          {filteredBooks.map((book) => (
            <div key={book.asin} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <SingleBook book={book} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default BookList
