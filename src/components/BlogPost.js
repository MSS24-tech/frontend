import React, { useEffect, useState } from "react";
import { fetchPost } from "../api/blogApi";

export default function BlogPost({ id }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("BlogPost component - current id:", id);

    // Check for null or undefined only, allow 0 or other falsy numbers
    if (id === null || id === undefined) {
      setError("No post ID provided");
      setPost(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setPost(null);

    fetchPost(id)
      .then((data) => {
        console.log("Fetched post:", data);
        setPost(data);
      })
      .catch((e) => {
        console.error("Fetch post error:", e);
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post || (Array.isArray(post) && post.length === 0))
    return <p>Post not found</p>;

  const postData = Array.isArray(post) ? post[0] : post;

  return (
    <article>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </article>
  );
}
