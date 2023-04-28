// HTTP REQUEST:

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data);
//     })

// fetch('https://jsonplaceholder.typicode.com/posts') // BY DEFAULT GET REQUEST
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data);
//     })

// const imagesContainer = document.getElementById("images");
// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         // console.log(data);
//         data.forEach(function (img) {
//             // img.url
//             const url = img.url;
//             const imgElem = document.createElement("img");
//             imgElem.src = url;
//             imagesContainer.appendChild(imgElem)
//         })
//     });

// Get: Data ko read krne ke liye
// Post: Data ko create krne ke liye
// Put: Data ko update krne ke liye
// Delete: Data ko delete krne ke liye

// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' }, // special information
//     body: JSON.stringify({
//         title: 'BMW Pencil',
//         description: 'This is an amazing pencil'
//     })
// })
//     .then(res => res.json())
//     .then(console.log);

// fetch('https://dummyjson.com/products/1', {
//     method: 'PUT', /* or PATCH */
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'iPhone Galaxy +1'
//     })
// })
//     .then(res => res.json())
//     .then(console.log);

fetch('https://dummyjson.com/products/1', {
    method: 'DELETE',
})
    .then(res => res.json())
    .then(console.log);