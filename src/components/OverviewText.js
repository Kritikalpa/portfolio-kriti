import React, { useEffect } from "react";
import "../styles/Overview.scss";

function OverviewText() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("my-name").classList.add("is-mounted");
    }, 1000 * 1);
    return () => {
      document.getElementById("my-name").classList.remove("is-mounted");
    };
  }, []);

  return (
    <div>
      <div id="my-name" className="overview-name">
        KritiKalpa Saha
      </div>
      <div className="overview-details">
        <div>
          <div>Frontend Developer</div>
          <div>5+ Years Experience</div>
        </div>
        <div className="overview-location">
          <div>Tripura, INDIA</div>
          <div>saha.kritikalpa@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default OverviewText;
