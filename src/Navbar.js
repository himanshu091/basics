import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( <>
        <nav className="navbar">
        <h1>Himanshu Blog</h1>
        <div className="links">
            <Link to="/"><a href="/">Home</a></Link>
            <Link to ="/create"><a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</a></Link>
        </div>
        </nav> </>
     );
}
 
export default Navbar;