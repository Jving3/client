import "./App.css";
import React, {useState} from 'react';
import Axios from 'axios';

const App = () => {

  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName, 
      movieReview: review,
    }).then( () => {
      alert("successfull insert");
    });
  };

  return ( 

      <div className="App">
          <h1>FORUS BEE</h1>

          <div className="form">
              <label>Nombre:</label>
              <input 
              type="text" 
              name="movieName" 
              onChange={(e) => {
                setMovieName(e.target.value)
              }}
              />
              <label>Tipo:</label>
              <input type="text" name="review" 
              onChange={(e) => {
                setReview(e.target.value)
              }}
              />

              <button onClick={submitReview}>Submit</button>

          </div>
      </div>

   );
}
 
export default App;