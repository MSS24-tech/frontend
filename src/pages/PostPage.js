import React from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";

export default function PostPage() {
  const { id } = useParams();
  return (
    <div>
      <BlogPost postId={id} />
    </div>
  );
}
