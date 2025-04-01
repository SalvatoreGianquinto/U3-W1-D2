import React from "react"
import { Alert } from "react-bootstrap"

const Welcome = function () {
  return (
    <>
      <Alert variant="danger" className="text-center mt-4">
        <h1>WELCOME</h1>
        Sprofonda nell'oscurità: i migliori libri horror ti aspettano!
      </Alert>
    </>
  )
}

export default Welcome
