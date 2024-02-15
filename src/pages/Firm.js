import React from "react";
import firmcss from "./Firm.module.css";
import floranteabad from "../images/floranteabad.jpg";
import city from "../images/city.jpg";
import { Link } from "react-router-dom";

function Firm() {
  return (
    <div className={firmcss.background}>
      <div className={firmcss.square}>
        <div className={firmcss.city}></div>
        <div className={firmcss.ourfirmcontainer}>
          <div className={firmcss.ourfirm}>OUR</div>
          <div className={firmcss.ourfirm}>FIRM</div>
        </div>
      </div>

      <div>
        <div className={firmcss.ourattorneysquare}>
          <div className={firmcss.ourattorneys}>OUR ATTORNEYS</div>
          <img
            className={firmcss.floranteabadimage}
            src={floranteabad}
            alt="Our Attorneys"
          />
          <div className={firmcss.floranteabadname}>Florante Abad</div>
          <div className={firmcss.floranteabaddescription}>
            <div className={firmcss.floranteabads1}>
              Mr Abad has been in the legal practice
            </div>
            <div className={firmcss.floranteabads2}>
              for more than 20 years. He was a litigation
            </div>
            <div className={firmcss.floranteabads3}>lawyer for 10 years.</div>
            <div className={firmcss.floranteabads4}>
              Currently his practices are Property
            </div>
            <div className={firmcss.floranteabads5}>
              Law, Wills & Estate and Family Law.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firm;
