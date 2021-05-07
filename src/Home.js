import {useState} from 'react';



const Home = () => {
const [name, setName] = useState("Himanshu");
  const changeName = () => {
    setName("Nainy")
  }  
    return (
        <div className="content">
        <h1>Homepage</h1>
        <p>{name}</p>
        <button onClick={changeName}>Change Name</button>
        </div>
     );
}
 
export default Home;