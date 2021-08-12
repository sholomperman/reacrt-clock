import { useState, useEffect } from 'react';
import './index.css';

function App() {

  const [hours, setHours] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();
  const [ampm, setAmpm] = useState('AM');

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
  
  
  switch (hours) {
    case 13:
      setHours(1);
      break;
    case 14:
      setHours(2);
      break;
    case 15:
      setHours(3);
      break;
    case 16:
      setHours(4);
      break;
    case 17:
      setHours(5);
      break;
    case 18:
      setHours(6);
      break;
    case 19:
      setHours(7);
      break;
    case 20:
      setHours(8);
      break;
    case 21:
      setHours(9);
      break;
    case 22:
      setHours(10);
      break;
    case 23:
      setHours(11);
      break;
    case 24:
      setHours(12);
      break;
  }

    if (hours > 12) {
    setAmpm('PM')
  }



    
    return (
      <>
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
        <h1 className='digital'>{`${hours} : ${minute} : ${second} ${ampm}`}</h1>
  </>
  );
}

export default App;
