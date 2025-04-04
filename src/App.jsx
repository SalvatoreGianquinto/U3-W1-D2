import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
//import AllTheBooks from "./components/AllTheBooks"
import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"
import books from "./data/horror.json"
import CommentArea from "./components/CommentArea"

function App() {
  return (
    <>
      <MyNav tema="dark" id="top" />
      <Welcome />
      <div className="container mt-4">
        <h2 className="text-center">Libro in evidenza</h2>
        <BookList books={books} />
        <CommentArea />
      </div>
      <MyFooter />
    </>
  )
}

export default App
