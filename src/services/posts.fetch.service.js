import {url} from "./user.fetch.service";


const getPosts = () => {
    return fetch(url  + 'posts')
        .then(value => value.json())
}


const getCommentsOfPosts = (id) => {
    return fetch(url  + 'posts/' + id + '/comments')
        .then(value => value.json())
}

export {getPosts, getCommentsOfPosts}
