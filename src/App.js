import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddReview from './components/AddReview';
import ReviewDetails from './components/ReviewDetails';
import {useState} from 'react'


function App() {
  const [data, setData] = useState([{
    "id": 1,
    "title": "Fight Club",
    "rating": 5,
    "body": "Review goes here blah blah blah",
    "author": "Candice"
  },
  {
    "id": 2,
    "title": "Inception",
    "rating": 4,
    "body": "Review goes here blah blah blah",
    "author": "Rory"
  }]);

  const handleAddReview = review => {
    setData([...data, review])
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = '/'>
              <Home reviews={data} handleAddReview={handleAddReview}/>
            </Route>
            <Route path = '/addreview'>
              <AddReview handleAddReview={handleAddReview}/>
            </Route>
            <Route path = '/reviews/:id'>
              <ReviewDetails reviews={data}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
