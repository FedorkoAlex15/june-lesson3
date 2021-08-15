import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../services/user.fetch.service";
import '../users/Users.css'
import User from "../User/User";

export default function Users(){

    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [postsOfUser, setPostsOfUser] = useState(null)

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])


    const chooseUser = (u) => {
       setUser({...u})

            getPostsOfUser(u.id).then(value => setPostsOfUser([...value]))

    }






    return(
        <div className={'wrap'}>

            <div className={'users-box'}>
                {
                    users.map(value => <User
                        key={value.id}
                        item={value}
                        chooseUser={chooseUser}
                    /> )
                }

            </div>

            {
                user &&  <div className={'chosen-one'}>
                    {user.name}
            </div>}

            {
              postsOfUser &&  <div className={'chosen-two'}>
                  {
                      postsOfUser.map(value => {
                          return <div >{value.title} <hr/></div>
                      })
                  }

                </div>
            }
        </div>
    )
}
