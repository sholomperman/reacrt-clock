import { useState, useEffect } from 'react';
import './index.css';

function App() {

  const [hours, setHours] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();
  // const [ampm, setAmpm] = useState('PM')

  useEffect(() => {
    setInterval(() => {
      setHours(new Date().getHours());
      setMinute(new Date().getMinutes());
      setSecond(new Date().getSeconds());
    }, 1000);
  }, []);

  
  const myStyleHours = {
    transform: `rotate(${hours * 30}deg)`
  };
  const myStyleMinute = {
    transform: `rotate(${minute * 6}deg)`
  };
    
  const myStyleSecond = {
    transform: `rotate(${second * 6}deg)`
  };
  
    return (
  <div className="container">
    <div className="clock">
      <div className='middle'></div>
        <h2 className="num num-12">12</h2>
        <h2 className="num num-1">1</h2>
        <h2 className="num num-2">2</h2>
        <h2 className="num num-3">3</h2>
        <h2 className="num num-4">4</h2>
        <h2 className="num num-5">5</h2>
        <h2 className="num num-6">6</h2>
        <h2 className="num num-7">7</h2>
        <h2 className="num num-8">8</h2>
        <h2 className="num num-9">9</h2>
        <h2 className="num num-10">10</h2>
        <h2 className="num num-11">11</h2>
        <div style={myStyleMinute} className="handContainerMinute">
          <div className="minute"></div>
        </div>
        <div style={myStyleHours} className="handContainerHours">
          <div className="hours"></div>
        </div>
    </div>
        <div style={myStyleSecond} className="handContainerSecondes">
          <div className="secondes"></div>
        </div>
  </div>
  );
}

export default App;
