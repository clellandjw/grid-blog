export default function Header(props){
    return (
        <div>
            <h1>Grid Blog</h1>
            <p>Posts: {props.totalPosts}</p>
            <p>Likes: {props.totalLikes}</p>
            <p>Dislikes: {props.totalDislikes}</p>
        </div>
    )
}