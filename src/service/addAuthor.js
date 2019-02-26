export default function AddAuthor(data) {
  console.log(data);
  return fetch('http://localhost:4000/authors/', {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response =>
      response.json()
  ).catch(error => {
      console.log('data will be send later');
  })
}