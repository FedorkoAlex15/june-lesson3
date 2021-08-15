const url = 'https://jsonplaceholder.typicode.com/'
const getUsers = () => {

    return fetch(url + 'users')
        .then(value => value.json())

}

const getPostsOfUser = (id) => {

 return  fetch(url +'users/' + id + '/posts')
     .then(value => value.json())
}


export {getUsers, getPostsOfUser, url}