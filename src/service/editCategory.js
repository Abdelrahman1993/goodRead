import Cookies from 'universal-cookie';

export default function EditCategory(data) {

  return fetch('http://localhost:4000/categories/'+data._id, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": new Cookies().get('token'),
    },
  }).then(response =>
      response.json()
  ).catch(error => {
      console.log('data will be send later');
  })
}