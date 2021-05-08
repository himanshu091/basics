
const Home = () => {

    const higherOrder = (name)=>{
        console.log("Your Name is" + name)
    }
 
    return (
        <div className="content">
        <h1>Learn about anonymous function</h1>
        
        <button onClick={()=>{
            higherOrder("Himanshu")
        }} >Click Me </button>

        </div>
     );
}
 
export default Home;