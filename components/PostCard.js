import Link from "next/link";

export default function PostCard(props) {
    const { post } = props
    return (
        <Link className="unstyled" href={`/news/${post.slug}`}>
            <div className="postCard">
                <h3>{post.title}</h3>
                <p>{post.bio}</p>
            </div>
        </Link>
    )
}