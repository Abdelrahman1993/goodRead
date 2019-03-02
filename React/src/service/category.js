export default function getCategories() {
  return fetch('http://localhost:4000/categories/')
      .then(response =>
      response.json())
}