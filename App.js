import React, { useState, useEffect } from 'react';

function App() {
  const [deliveries, setDeliveries] = useState([]);
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  useEffect(() => {
    // Assume fetchDeliveries() is a function that fetches delivery data from the backend
    fetchDeliveries().then(data => setDeliveries(data));
  }, []);

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SmartRoute Optimizer</h1>
        <form>
          <label>
            Longitude:
            <input type="text" value={longitude} onChange={handleLongitudeChange} />
          </label>
          <br />
          <label>
            Latitude:
            <input type="text" value={latitude} onChange={handleLatitudeChange} />
          </label>
        </form>
        <ul>
          {deliveries.map((delivery, index) => (
            <li key={index}>{delivery.item} to ({delivery.latitude}, {delivery.longitude})</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;






// import React, { useState, useEffect } from 'react';

// function App() {
//   const [deliveries, setDeliveries] = useState([]);

//   useEffect(() => {
//     // Assume fetchDeliveries() is a function that fetches delivery data from the backend
//     fetchDeliveries().then(data => setDeliveries(data));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>SmartRoute Optimizer</h1>
//         <ul>
//           {deliveries.map((delivery, index) => (
//             <li key={index}>{delivery.item} to {delivery.address}</li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
