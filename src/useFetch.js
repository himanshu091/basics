import {useEffect , useState } from 'react';
const useFetch = (url)=>{

    const [data, setData] = useState(null);

    // Error Mesage set in UI 
    const[error,setError]=useState(null);
  
    // Loading Logic
    const [isPending,setIsPending]=useState(true);
    useEffect(() => {
        fetch(url)
        .then(res=>{
          if (!res.ok){
            throw Error("Server side error in response");
          }
      
          return res.json();
        })
        .then( data =>{
      console.log(data)
      setData(data);
      setIsPending(false);
      setError(null)
      
      }).catch(err=>{
      
        setIsPending(false);
        setError(err.message)
        
      })
      
      },[url])

return {data,isPending,error}
}

export default useFetch;