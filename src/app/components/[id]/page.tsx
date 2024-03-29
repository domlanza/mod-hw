async function getPost(postId: string) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        { cache: 'no-store'}
    );
    const data = await res.json();
    return data;
}


export default async function PostPage({ params }: any) {
    const post = await getPost(params.id);
    return (
        <div>
            <h1>post/{post.id}</h1>
            <div>
                <h3>{post.id}</h3>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
            </div>
        </div>
    );
}