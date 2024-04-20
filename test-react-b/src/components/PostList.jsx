import {useState, useEffect} from "react";
import Post from "./Post";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      let response = await fetch("http://localhost:3000/api/posts");
      let data = await response.json();
      setPosts(data);
    }
    getPosts();
  }, []);

  return (
        
          posts.map((post) => (

            <Post
            key={post._id + post.image + post.name + post.content + post.posted_at}
            id = {post._id}
            image={post.image}
            name ={post.name}
            content={post.content}
            posted={post.posted_at}
            />
          ))         
        
  );
}