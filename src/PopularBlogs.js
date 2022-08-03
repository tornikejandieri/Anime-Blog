import BlogList from "./BlogList";
import HomePage from "./Home";
import { useState } from "react";

const PopularBlogs = () => {
    const [blog, setBlog] = useState([
        {blogname: 'Dub Vs Sub', author: 'Makima', id: 1},
        {blogname: 'Epic Cooking Tips From Hange', author: 'Hange', id: 2},
        {blogname: 'Konosuba S3 Updates', author: 'Megumin', id: 3},
    ])


    return ( 
    <div className="content">
        <h2>Most Read</h2>
        <BlogList blog={blog} />
    </div> );
}
 
export default PopularBlogs;