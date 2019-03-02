export default function getBooks() {
  return fetch('http://localhost:4000/books/')
      .then(response =>
      response.json())
}