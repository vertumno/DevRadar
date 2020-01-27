import React, { useState, useEffect } from 'react';
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import './css/global.css';
import './css/App.css';
import './css/Sidebar.css';
import './css/Main.css';

function App() {
  
  const [devs, setDevs] = useState([]);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)
    // Updating the devs with the added one
    setDevs([...devs, response.data]);
  };

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');     
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <DevForm onSubmit={handleAddDev} />        
      </aside>      
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>        
      </main>
    </div>
  );
}

export default App;