import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";

function PostDetail() {
    const Params = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${Params.id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [Params.id])
    if (!post) return <Loading />;
    return <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>;
}
export default PostDetail;