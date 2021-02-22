import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/postDetails/:postId">
            <PostDetails/>
          </Route>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route path ="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
      


      
    </div>
  );
}

export default App;
