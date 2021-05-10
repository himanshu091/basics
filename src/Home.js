import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: "First Blog", body: "Lorem Ipsum...", author: "Himanshu", id: 1 },
    { title: "Second Blog", body: "Lorem Ipsum...", author: "John", id: 2 },
    { title: "Third Blog", body: "Lorem Ipsum...", author: "Himanshu", id: 3 }
  ]);

  return (
    <div className="home">
     

  <BlogList blogs={blogs} title="All Blogs" />
  <BlogList blogs={blogs.filter((blog)=>(blog.author==="Himanshu"))} title="Himanshu Blogs" />

    </div>
  );
}

export default Home;