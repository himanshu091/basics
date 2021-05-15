const BlogList = ({blogs,title}) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By : {blog.author}</p>
                    <br/>
                    {/* <button style={{ 
          color: 'white', 
          backgroundColor: 'red',
          borderRadius: '6px' ,
          padding:'5px'
        }} >Delete Blog</button> */}
                </div>
            ))}
        </div>
    );
}

export default BlogList;