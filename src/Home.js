import { useState } from 'react';
const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: "First Blog", body: "Lorem Ipsum...", author: "Himanshu", id: 1 },
    { title: "Second Blog", body: "Lorem Ipsum...", author: "Himanshu", id: 2 },
    { title: "Third Blog", body: "Lorem Ipsum...", author: "Himanshu", id: 3 }
  ]);

  return (
    <div className="content">
      <h1>Learn about anonymous function</h1>
      {/* Function invoked itself */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By : {blog.author}</p>
        </div>
      ))}

    </div>
  );
}

export default Home;