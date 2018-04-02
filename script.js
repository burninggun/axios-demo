const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
    console.log('Server Response', resp);
}).catch( err => {
    console.log('There was an error', err)
} )

const newItem= {
    title: 'Will todo itemmmm',
    details: 'get $money'
}

// axios.post(`${BASE_URL}/todos${API_KEY}`,newItem).then( resp => {
//     console.log('Add Response', resp)
// })

const itemId = "5ac27883329150131fbbff5e";

// http://reactprototypes.com/todos/id?key=testuser1234

axios.get(`${BASE_URL}/todos/${itemId}${API_KEY}`).then(resp => {
    console.log('single item Server Response', resp);
})