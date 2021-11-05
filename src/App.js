import logo from './logo.svg';
import './App.css';
import Review from './components/Review';
import { useState } from 'react';

function App() {
  const [reviews, setReviews] = useState([]);

  async function getData(url = process.env.REACT_APP_URL, data = {}) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_ACCESS_TOKEN
      }
    });


    const json = await response.json();
    setReviews(json);

    // TODO: sort returned reviews based on rating, or maybe date?
  }

  return (
    <div className="App">
      <header className="main-header">Shakespear's Reviews</header>
      <div className="header-bar">
        <button className="main-button" onClick={() => getData()}>Check Current Reviews</button>
        <div>Sort by: </div>
        <input id="reviewer" name="sort-option" type="radio" />
        <label htmlFor="reviewer">Reviewer</label>
        <input id="rating" name="sort-option" type="radio" />
        <label htmlFor="rating">Rating</label>
        <input id="date" name="sort-option" type="radio" />
        <label htmlFor="date">Date</label>
      </div>
      
      <div>
        {reviews.map((review) => {
          return <Review key={review.id} data={review}/>
        })}
      </div>
      
    </div>
  );
}

export default App;
