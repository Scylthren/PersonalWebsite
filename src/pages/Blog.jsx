import { Link } from "react-router-dom";
import { getAllPosts } from "../utils/posts.js";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="wrap">
      <p className="eyebrow">Writing</p>
      <h1 className="page-title">Blog</h1>
      <p className="lede">Notes, write-ups, and things I've learned.</p>

      <div className="catalog">
        {posts.map((post, i) => (
          <div className="catalog-item" key={post.slug}>
            <div className="catalog-num">
              NO. {String(posts.length - i).padStart(3, "0")}
            </div>
            <div>
              <h2 className="catalog-title">
                <Link className="catalog-title-link" to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="catalog-desc">{post.excerpt}</p>
              <div className="catalog-meta">
                <span className="catalog-date">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
