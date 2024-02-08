import React, { useEffect } from "react";
import experience from "../data/experience.json";
import Milestone from "../components/Milestone";
import "../styles/Journey.scss";

function Journey() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("my-journey").classList.add("is-journey-mounted");
    }, 1000 * 1);
    return () => {
      document.getElementById("my-journey").classList.remove("is-journey-mounted");
    };
  }, []);
  return (
    <div id="my-journey" className="journey">
      {experience.map((item, index) => (
        <Milestone
          key={index}
          milestone={item.name}
          year={item.year}
          index={index}
        />
      ))}
    </div>
  );
}

export default Journey;
