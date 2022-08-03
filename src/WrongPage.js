import { useHistory } from "react-router-dom";


const WrongPage = () => {
    const history = useHistory()
    
    return ( 
        <div className="wrong-page">
            <h1>404</h1>
            <p>Sorry, the page you requested doesn't exist.</p>
            <button onClick={() => {
                history.push('/')
            }}>Click here to return to the home page</button>
        </div>
     );
}
 
export default WrongPage;