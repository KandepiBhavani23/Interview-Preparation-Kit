// Using Switch Case

import { useEffect, useState } from "react";

const lightConfig = {
  red: "red",
  yellow: "yellow",
  green: "green",
};

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(lightConfig.red);

  useEffect(() => {
    let timer;
    switch (activeLight) {
      case lightConfig.red:
        timer = setTimeout(() => {
          setActiveLight(lightConfig.green);
        }, 4000);
        break;
      case lightConfig.green:
        timer = setTimeout(() => {
          setActiveLight(lightConfig.yellow);
        }, 3000);
        break;
      case lightConfig.yellow:
        timer = setTimeout(() => {
          setActiveLight(lightConfig.red);
        }, 500);
        break;
    }

    return () => clearTimeout(timer);
  }, [activeLight]);

  return (
    <div className="trafficlight-container">
      <div
        className={`red trafficLight ${
          activeLight !== lightConfig.red ? "inactiveLight" : null
        }`}>
        A
      </div>
      <div
        className={`yellow trafficLight ${
          activeLight !== lightConfig.yellow ? "inactiveLight" : null
        }`}>
        B
      </div>
      <div
        className={`green trafficLight ${
          activeLight !== lightConfig.green ? "inactiveLight" : null
        }`}>
        C
      </div>
    </div>
  );
};
export default TrafficLight;
