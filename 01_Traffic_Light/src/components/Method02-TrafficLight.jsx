import { useEffect, useState } from "react";

const LightConfig = {
  red: {
    next: "green",
    duration: 4000,
  },
  green: {
    next: "yellow",
    duration: 3000,
  },
  yellow: {
    next: "red",
    duration: 500,
  },
};

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setActiveLight(LightConfig[activeLight].next);
    }, LightConfig[activeLight].duration);

    return () => clearTimeout(timer);
  }, [activeLight]);

  return (
    <div className="trafficlight-container">
      <div
        className={`red trafficLight ${
          activeLight !== "red" ? "inactiveLight" : null
        }`}>
        A
      </div>
      <div
        className={`yellow trafficLight ${
          activeLight !== "yellow" ? "inactiveLight" : null
        }`}>
        B
      </div>
      <div
        className={`green trafficLight ${
          activeLight !== "green" ? "inactiveLight" : null
        }`}>
        C
      </div>
    </div>
  );
};
export default TrafficLight;
