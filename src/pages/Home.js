import React from "react";
import homecss from "./Home.module.css";
import city from "../images/city.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={homecss.background}>
      <div className={homecss.square}>
        <div className={homecss.city}></div>
        <div className={homecss.practiceareas}>PRACTICE</div>
        <div className={homecss.practiceareas}>AREAS</div>
        <div className={homecss.smallerareas}></div>
        <div className={homecss.smallerareas}>Conveyancing</div>
        <div className={homecss.smallerareas}>Family Law</div>
        <div className={homecss.smallerareas}>Criminal Law</div>
        <div className={homecss.smallerareas}>Wills & Estate</div>
        <div className={homecss.smallerareas}>Probate</div>
        <Link to="/book-online" className={homecss.bookonline}>
          BOOK ONLINE &gt;&gt;
        </Link>
      </div>
    </div>
  );
}

export default Home;
