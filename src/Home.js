import { useState } from "react";
import BlogList from "./BlogList";


const HomePage = () => {
    const [blog, setBlog] = useState([
        {blogname: 'My First Blog!', author: 'Komatsu Nana', id: 1},
        {blogname: 'Summer Season Top Anime List', author: 'Kazuma', id: 2},
        {blogname: 'How To Draw a Manga', author: 'Kishibe Rohan', id: 3},
    ])

    return ( 
        
        <div className="content">
            
            <BlogList blog={blog} recently="Recently Added" />
            
        </div>
     );
}
 
export default HomePage;