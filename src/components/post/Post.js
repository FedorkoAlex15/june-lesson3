export default function Post({item, choosePost}){

    const onclick = () => {
        choosePost(item)
    }

    return(
        <div>
            {item.id} - {item.title}
            <button onClick={onclick}>Click</button>
        </div>

    )
}