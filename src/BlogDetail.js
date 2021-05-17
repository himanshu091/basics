import { useParams } from "react-router";
import useFetch from "./useFetch";


const BlogDetail = () => {
    const {id} = useParams();
    const {data : blog,ispending,error} = useFetch('http://localhost:8000/blogs/' + id);
    
    return ( 

        <div className="blogDetail">
            {ispending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <p>{blog.body}</p>
                </article>

            )}
        </div>
     );
}
 
export default BlogDetail;