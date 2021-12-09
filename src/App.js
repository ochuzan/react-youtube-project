import './App.css';
import View from './components/View';
import Home from './components/Home';
import About from './components/About';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/view/'>
            <View />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
