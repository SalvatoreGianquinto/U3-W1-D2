//CommentsList mostrerà le recensioni del libro in un elenco; l'array di recensioni gli verrà passato come prop dal componente CommentArea.
// La singola recensione verrà visualizzata utilizzando un altro componente, chiamato SingleComment.
import SingleComment from "./SingleComment"

const CommentsList = ({ recensioni, onDelete }) => {
  return (
    <ul>
      {recensioni.map((recensione) => (
        <SingleComment
          key={recensione._id}
          recensione={recensione}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default CommentsList
