import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <div className="nav-bar">
            <h1>Anime Blogs</h1>
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/popularblogs"}>Popular Blogs</Link>
                <Link to={"/addblog"}>Add Blog</Link>
                
            </ul>
            
        </div>
        
     );
}
 
export default Navbar;