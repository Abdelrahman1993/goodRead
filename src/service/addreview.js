import Cookies from "universal-cookie";

export default function AddReview(data) {
    console.log(data);
    const formData = new FormData();
    formData.append('review', data.name);
    formData.append('bookId', data.categoryId);
    formData.append('userId', data.authorId);

    return fetch('http://localhost:4000/books/', {
        // body: JSON.stringify(data),
        method: 'POST',
        body: formData,
        headers: {
            "Authorization": new Cookies().get('token'),
        },
    }).then(response =>
        response.json()
    ).catch(error => {
        console.log('review will be send later');
    })
}