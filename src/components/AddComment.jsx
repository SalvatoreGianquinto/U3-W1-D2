//AddComment conterrà un form per aggiungere il testo della recensione e il voto (da 1 o a 5).
// Questo componente dovrà permettere all'utente di fare la POST del nuovo commento sul libro selezionato.
import { Component } from "react"

const APIKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlNzVmMTFkYTI2ZmYiLCJpYXQiOjE3NDM2ODEwMTAsImV4cCI6MTc0NDg5MDYxMH0.t-k4z1gTEHCgqOWmQ15_AzO3Y6-eew1ABH7_A0lrr8g"

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { bookId } = this.props

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlNzVmMTFkNDM2ZTAwMTVkYTI2ZmYiLCJpYXQiOjE3NDM2ODEwMTAsImV4cCI6MTc0NDg5MDYxMH0.t-k4z1gTEHCgqOWmQ15_AzO3Y6-eew1ABH7_A0lrr8g",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: this.state.comment,
        rate: this.state.rate,
        elementId: bookId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Commento aggiunto con successo")
          this.setState({ comment: "", rate: 1 })
        } else {
          throw new Error("Errore nell'aggiunta del commento")
        }
      })
      .catch((error) => {
        console.log("Errore:", error)
      })
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="d-flex flex-column gap-3 text-center "
      >
        <div>
          <label className="pe-2">Commento:</label>
          <input
            type="text"
            value={this.state.comment}
            onChange={(e) => {
              this.setState({ comment: e.target.value })
            }}
          />
        </div>
        <div>
          <label className="pe-2">Valutazione:</label>
          <select
            value={this.state.rate}
            onChange={(e) => this.setState({ rate: e.target.value })}
          >
            {[1, 2, 3, 4, 5].map((rate) => (
              <option key={rate} value={rate}>
                {rate}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Aggiungi Commento</button>
      </form>
    )
  }
}

export default AddComment
