import { useState,useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {

  const [blogs, setBlogs] = useState(null);

  // Error Mesage set in UI 
  const[error,setError]=useState(null);

  // Loading Logic
  const [isPending,setIsPending]=useState(true);
  
 
useEffect(() => {
  fetch(' http://localhost:8000/blogs')
  .then(res=>{
    if (!res.ok){
      throw Error("Server side error in response");
    }

    return res.json();
  })
  .then( data =>{
console.log(data)
setBlogs(data);
setIsPending(false);
setError(null)

}).catch(err=>{

  setIsPending(false);
  setError(err.message)
  
})

},[])
  return (
    <div className="home">
{error && <div>{error}</div>}
{ isPending && <div>Loading...</div>}
 { blogs && <BlogList blogs={blogs} title="All Blogs" />}
  

    </div>
  );
}

export default Home;