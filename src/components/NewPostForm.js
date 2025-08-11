import React, { useState } from "react";
import { createPost } from "../api/blogApi";
import { useNavigate } from "react-router-dom";

export default function NewPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = await createPost({ title, body });
      navigate(`/post/${newPost.id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Title:</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Body:</label>
        <br />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={6}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}
