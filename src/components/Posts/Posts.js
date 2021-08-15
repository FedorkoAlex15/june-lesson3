import {useEffect, useState} from "react";
import {getCommentsOfPosts, getPosts} from "../../services/posts.fetch.service";
import {url} from "../../services/user.fetch.service";

import './flex.css'
import Post from "../post/Post";
export default function Posts(){

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)

    const choosePost = (p) => {
        setPost({...p})

        getCommentsOfPosts(p.id).then(value => setComments(value))
    }

    console.log(post)


    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])



    const postPerPage = posts.slice(0, 10)




    return(
        <div className={'flex'}>

            <div className={'column-1'}>
                {

                    postPerPage.map(value => {
                        return <Post
                            key={value.id}
                            item={value}
                            choosePost={choosePost}
                        />
                    })
                }



            </div>


            { post &&
                <div className={'column-2'}>
                    {post.body}
                </div>
            }


            {comments &&

                <div className={'column-3'}>
                    {
                        comments.map(value => {
                            return <div>{value.name} <hr/></div>
                        })
                    }
                </div>

            }

        </div>
    )
}