//Aggiungi un componente CommentArea alla fine di SingleBook. Quando l'utente cliccherà su un SingleBook (quindi quando la proprietà selected nel suo stato diventa true),
// i commenti dovranno apparire (suggerimento: short-circuit operator!).
//CommentArea dovrà fare la fetch delle recensioni per il libro selezionato, e salvare i commenti nel proprio stato.
// Conterrà inoltre due sotto-componenti: CommentsList and AddComment.
import { Component } from "react"
import CommentsList from "./CommentList"
import AddComment from "./AddComment"

const APIKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlNzVmMTFkNDM2ZTAwMTVkYTI2ZmYiLCJpYXQiOjE3NDM2ODEwMTAsImV4cCI6MTc0NDg5MDYxMH0.t-k4z1gTEHCgqOWmQ15_AzO3Y6-eew1ABH7_A0lrr8g"

class CommentArea extends Component {
  state = {
    recensioni: [],
  }

  getComments = () => {
    const { bookId } = this.props

    console.log("Fetching comments for bookId:", bookId)

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + bookId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlNzVmMTFkNDM2ZTAwMTVkYTI2ZmYiLCJpYXQiOjE3NDM2ODEwMTAsImV4cCI6MTc0NDg5MDYxMH0.t-k4z1gTEHCgqOWmQ15_AzO3Y6-eew1ABH7_A0lrr8g",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero dei commenti")
        }
      })
      .then((data) => {
        console.log("Dati ricevuti:", data)
        this.setState({ recensioni: data })
      })
      .catch((error) => {
        console.error("Errore nella fetch:", error)
      })
  }

  componentDidMount() {
    this.getComments()
  }

  componentDidUpdate(prevProps) {
    // Controlla se il bookId è cambiato
    if (prevProps.bookId !== this.props.bookId) {
      this.getComments()
    }
  }

  render() {
    const { recensioni } = this.state
    return (
      <div>
        <h2>Commenti</h2>
        <CommentsList
          recensioni={recensioni}
          onDelete={this.handleDeleteComment}
        />
        <AddComment
          bookId={this.props.bookId}
          onCommentAdded={this.getComments}
        />
      </div>
    )
  }
}

export default CommentArea
