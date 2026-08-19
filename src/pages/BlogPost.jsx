import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "../utils/posts.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="wrap">
        <h1 className="page-title">Post not found</h1>
        <Link className="back-link" to="/blog">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="wrap">
      <p className="eyebrow">{post.date}</p>
      <h1 className="page-title">{post.title}</h1>
      <div className="post-body">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
      <Link className="back-link" to="/blog">
        ← Back to blog
      </Link>
    </div>
  );
}
