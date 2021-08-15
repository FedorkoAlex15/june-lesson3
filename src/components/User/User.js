export default function User({item, chooseUser}){

    const onclick = () => {
       chooseUser(item)
    }

    return(
        <div>
            {item.id} - {item.name}
            <button onClick={onclick}
            > Click</button>
        </div>
    )
}