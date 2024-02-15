import React from "react";
import bookonlinecss from "./Bookonline.module.css";

function BookOnline() {
  return (
    <div className={bookonlinecss.background}>
      <div className={bookonlinecss.square}>
        <div className={bookonlinecss.city}></div>
        <div className={bookonlinecss.ourservicescontainer}>
          <div className={bookonlinecss.our}>OUR</div>
          <div className={bookonlinecss.services}>SERVICES</div>
        </div>

        <div className={bookonlinecss.propertylawsquare}>
          <div className={bookonlinecss.propertylaw}>PROPERTY LAW</div>
          <div className={bookonlinecss.onehour}>1 hr</div>
          <div className={bookonlinecss.consultationmeeting}>
            Consultation Meeting
          </div>
        </div>

        <div className={bookonlinecss.immigrationsquare}>
          <div className={bookonlinecss.immigration}>IMMIGRATION</div>
          <div className={bookonlinecss.onehour}>1 hr</div>
          <div className={bookonlinecss.consultationmeeting}>
            Consultation Meeting
          </div>
        </div>

        <div className={bookonlinecss.criminallawsquare}>
          <div className={bookonlinecss.criminallaw}>CRIMINAL LAW</div>
          <div className={bookonlinecss.onehour}>1 hr</div>
          <div className={bookonlinecss.consultationmeeting}>
            Consultation Meeting
          </div>
        </div>

        <div className={bookonlinecss.familylawsquare}>
          <div className={bookonlinecss.familylaw}>FAMILY LAW</div>
          <div className={bookonlinecss.onehour}>1 hr</div>
          <div className={bookonlinecss.consultationmeeting}>
            Consultation Meeting
          </div>
        </div>

        <div className={bookonlinecss.conveyancingsquare}>
          <div className={bookonlinecss.conveyancing}>CONVEYANCING</div>
          <div className={bookonlinecss.onehour}>1 hr</div>
          <div className={bookonlinecss.consultationmeeting}>
            Consultation Meeting
          </div>
        </div>

        <div className={bookonlinecss.conveyancing}></div>
      </div>
    </div>
  );
}

export default BookOnline;
