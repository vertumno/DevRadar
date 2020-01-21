import React, { useState, useEffect } from 'react';

import './css/global.css';
import './css/App.css';
import './css/Sidebar.css';
import './css/Main.css';

function App() {
  
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 3000,
      }
    )
  }, []);
  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <form>          
          
          <div className="input-block">
            <label htmlFor="github_username">Github username</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)} />
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Technologies</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)} />
          </div>
          
          <div className="input-group">            
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)} />
            </div>            
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)} />
            </div>
          </div>

          <button type="submit">Save</button>

        </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/17501172?s=460&v=4" alt="Lucas Dantas"/>
              <div className="user-info">
                <strong>Lucas Dantas</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Aiming to make a difference.</p>
            <a href="https://github.com/vertumno">See dev profile.</a>
          </li>
        </ul>        
      </main>

    </div>
  );
}

export default App;
