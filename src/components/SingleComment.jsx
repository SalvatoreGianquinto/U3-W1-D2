const SingleComment = ({ recensione, onDelete }) => {
  const handleDelete = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${recensione._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlNzVmMTFkNDM2ZTAwMTVkYTI2ZmYiLCJpYXQiOjE3NDM2ODEwMTAsImV4cCI6MTc0NDg5MDYxMH0.t-k4z1gTEHCgqOWmQ15_AzO3Y6-eew1ABH7_A0lrr8g",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Commento eliminato con successo")
          onDelete(recensione._id) // Notifica al genitore che il commento è stato eliminato
        } else {
          throw new Error("Errore nell'eliminazione del commento")
        }
      })
      .catch((error) => {
        console.error("Errore:", error)
      })
  }

  return (
    <li>
      <strong>{recensione.author}</strong> - {recensione.comment}:{" "}
      {recensione.rate}
      <button
        type="button"
        onClick={handleDelete}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Elimina
      </button>
    </li>
  )
}

export default SingleComment
