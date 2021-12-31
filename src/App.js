import React, { useState, useEffect } from 'react';
import StarVisualization from './StarVisualization';
import Slider from './Slider';
import Checkbox from './Checkbox';
import './App.css';

const DEFAULT_N = 7;
const DEFAULT_D = 3;
const DEFAULT_POINTINESS = 0.8;

function App() {
  const [time, setTime] = useState(0);
  const [n, setN] = useState(DEFAULT_N);
  const [dRaw, setD] = useState(DEFAULT_D);
  const d = Math.min(n-1, dRaw);
  const [pointiness, setPointiness] = useState(DEFAULT_POINTINESS);
  const [starScale, setStarScale] = useState(1);
  const [showStar, setShowStar] = useState(true);
  const [showIntraShapes, setShowIntraShapes] = useState(true);
  const [showInterShapes, setShowInterShapes] = useState(true);
  const [showPoints, setShowPoints] = useState(true);

  const sliders = (
    <table><tbody>
      <Slider setValue={setN} value={n} min={3} max={25} label={"Star Size"} />
      <Slider setValue={setD} value={d} min={1} max={n-1} label={"Divisor"} />
      <Slider setValue={setPointiness} value={pointiness} min={0} max={1.5} step={0.1} label={"Intracircle Line Scale"} />
      <Slider setValue={setStarScale} value={starScale} min={0.5} max={1.5} step={0.1} label={"Star Scale"} />
    </tbody></table>
  );

  const checkboxes = (
    <table><tbody>
      <Checkbox setValue={setShowStar} checked={showStar} label={"Show Star"} />
      <Checkbox setValue={setShowIntraShapes} checked={showIntraShapes} label={"Show Intracircle Lines"} />
      <Checkbox setValue={setShowInterShapes} checked={showInterShapes} label={"Show Intercircle Lines"} />
      <Checkbox setValue={setShowPoints} checked={showPoints} label={"Show Points"} />
    </tbody></table>
  );

  const starParameters = {n, d, pointiness, starScale};
  const showParameters = {showStar, showIntraShapes, showInterShapes, showPoints};

  const timeIncrementPerS = 0.1;
  const timeDelay = 100;  // ms

  const timeIncrement = timeIncrementPerS * timeDelay / 1000;

  useEffect(() => {
    var time = 0;
    const incrementTime = () => {
      const newTime = time + timeIncrement;
      setTime(newTime);
      time = newTime;
    }
    const timer = setInterval(incrementTime, timeDelay);
  }, []);

  return (
    <div className='app'>
      <div className='header'>
        Inspired by <a href="https://www.youtube.com/watch?v=oEN0o9ZGmOM&t=1227s">this great Mathologer video</a>.
        <br />
        "Intracircle Line Scale" and "Star Scale" can be tweaked to help the point path match the star better.
      </div>
      <span className='input-container'>
        {sliders}
        {checkboxes}
      </span>
      <StarVisualization
          starParameters={starParameters}
          timeParameters={{time: time, transitionTime: timeDelay }}
          showParameters={showParameters}
      />
    </div>
  );
}

export default App;
