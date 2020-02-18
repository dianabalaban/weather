import React  from 'react';
import './App.css';
import './Functions.js';
//import Daily from './Daily';
//import Today from './Today';
import City from './City';
import Home from './Home';
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/Amsterdam" component={City} />
        <Route path="/Paris" component={City} />
        <Route path="/London" component={City} />
      </div>
    </Router>
  );

}
export default App;
