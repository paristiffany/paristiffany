import React from "react";
import publicationcss from "./Publications.module.css";
import city from "../images/city.jpg";
import { Link } from "react-router-dom";

function Publications() {
  return (
    <div className={publicationcss.background}>
      <div className={publicationcss.square}>
        <div className={publicationcss.city}></div>
        <div className={publicationcss.publications}>PUBLICATIONS</div>

        <div className={publicationcss.governmentcontainer}>
          <div>Government publications and</div>
          <div>legislations.</div>
        </div>
      </div>
    </div>
  );
}

export default Publications;
