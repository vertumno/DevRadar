import React from 'react';

import './css/global.css';
import './css/App.css';
import './css/Sidebar.css';
import './css/Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <form>          
          
          <div class="input-block">
            <label htmlFor="github_username">Github username</label>
            <input name="github_username" id="github_username" required />
          </div>
          
          <div class="input-block">
            <label htmlFor="techs">Technologies</label>
            <input name="techs" id="techs" required />
          </div>
          
          <div className="input-group">            
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>            
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Save</button>

        </form>
      </aside>
      
      <main>
        <ul>
          <li class="dev-item">
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
