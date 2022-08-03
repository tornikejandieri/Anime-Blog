import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddBlog from './AddBlog';
import HomePage from './Home';
import Navbar from './Navbar';
import PopularBlogs from './PopularBlogs';
import WrongPage from './WrongPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/popularblogs">
            <PopularBlogs />
          </Route>
          <Route path="/addblog">
            <AddBlog />
          </Route>
          <Route path="*">
            <WrongPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
