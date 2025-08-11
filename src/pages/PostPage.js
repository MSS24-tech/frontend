import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";

export default function PostPage() {
  const { id } = useParams(); // id will be string or undefined

  // Optionally convert to number or check
  const postId = id ? Number(id) : null;

  return <BlogPost id={postId} />;
}
