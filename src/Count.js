import { useState } from 'react';

const Count = () => {

    const [count,setCount]=useState(0)
    const addOne = ()=>{
        setCount(count+1)
    }
    return (  

        <div style={{textAlign:'center',marginTop:20}}>
        <button style ={{color:"white",backgroundColor:"black",fontSize:20}} onClick={()=>{
            addOne()
        }} >Click me to +1</button>  
        <h2>{count}</h2>  
        </div>
    );
}
 
export default Count;