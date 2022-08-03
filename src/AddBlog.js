import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddBlog = () => {
    const history = useHistory()
    const [text, setText] = useState('Add Blog')
    
    return ( 
        <div className="add-blog">
            <h2>Add Your Blog Below!</h2>
            <input type="text" placeholder="Author Name"/>
            <input type="text" placeholder="Blog Title"/>
            <textarea type="text" />
            <button onClick={(e) => {
                e.preventDefault()
                setText('Loading...')
                setTimeout(() => {
                    history.push("/")
                }, 2000)
                
            }}>{ text }</button>
        </div>

     );
}
 
export default AddBlog;