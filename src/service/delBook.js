export default function DeleteBook(id) {
  return fetch('http://localhost:4000/books/'+id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response =>
      response.json()
  ).catch(error => {
      console.log('data not deleted');
  })
}