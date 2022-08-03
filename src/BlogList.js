const BlogList = ({ blog, recently }) => {
    return ( 
        <div className="blog-list">
            <h2>{ recently }</h2>
            {blog.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{ blog.blogname }</h3>
                    <p>{'Author: ' + blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;