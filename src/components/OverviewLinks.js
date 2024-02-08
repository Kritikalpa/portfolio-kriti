import React from "react";
import "../styles/Overview.scss"
import Resume from "../resume.pdf";

function OverviewLinks() {
  const handleDownload = () => {
    window.open(Resume);
  };
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/kritikalpa-saha/");
  };
  return (
    <div className="overview-links">
      <div className="overview-links-item" onClick={handleDownload}>
        <div>01</div>
        <div>resume</div>
      </div>
      <div className="overview-links-item" onClick={openLinkedIn}>
        <div>02</div>
        <div>linkedin</div>
      </div>
    </div>
  );
}

export default OverviewLinks;
