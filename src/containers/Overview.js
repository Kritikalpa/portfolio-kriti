import React from "react";
import OverviewLinks from "../components/OverviewLinks.js";
import OverviewText from "../components/OverviewText.js";
import "../styles/Overview.scss";

function Overview() {
  return (
    <div className="overview">
      <OverviewText />
      <OverviewLinks />
    </div>
  );
}

export default Overview;
