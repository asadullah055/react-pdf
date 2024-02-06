import React from "react";

const UniteHeader = () => {
  return (
    <div className="">
      <div className="text-center mt-5">
        <h6 style={{ fontFamily: "SolaimanLipi" }}>
          বিসমিল্লাহির রাহমানির রাহিম
        </h6>
        {/* <h4 className="fw-bolder">ইউনিট সংগঠনের মাসিক রিপোর্ট</h4> */}
        <h4 className="fw-bolder">Add Unicode text in pdf using jsPDF</h4>
      </div>
      <div className="row">
        <div className="col-6 fz-c">
          মাসঃ{" "}
          <span className="w-50 dotted d-inline-block text-center">
            জানুয়ারি
          </span>
        </div>
        <div className="col-6 fz-c text-end">
          সনঃ{" "}
          <span className="w-50 dotted d-inline-block text-center">২০২৪</span>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-5 fz-c">
          ইউনিটের নাম:
          <span className="w-50 dotted d-inline-block text-center">২০২৪</span>
        </div>
        <div className="col-5 fz-c">
          ওয়ার্ড নং ও নাম:
          <span className="w-50 dotted d-inline-block text-center">২০২৪</span>
        </div>
        <div className="col-2 fz-c">
          থানা:
          <span className="w-50 dotted d-inline-block text-center">২০২৪</span>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-5 fz-c">
          ইউনিট সভাপতির নাম :
          <span className="w-50 dotted text-center">জানুয়ারি</span>
        </div>
        <div className="col-7 fz-c">
          <span className="fw-bold">ইউনিটের ধরণ:</span>{" "}
          পুরুষ/উলামা/যুব/শ্রমিক/পেশাজীবি/
          <span className="w-25 dotted text-center">২০২৪</span>
        </div>
      </div>

      <div className="border border-bottom-2 border-dark"></div>
      {/* <div className="row">
        <div className="col-md-6 fz-c">
          <div className="d-flex">
            <span>ইউনিট সভাপতির নাম :</span>
            <span className="w-50 dotted d-block text-center">জানুয়ারি</span>
          </div>
        </div>
        <div className="col-md-6 fz-c">
          ইউনিটের ধরণ: পুরুষ/উলামা/যুব/শ্রমিক/পেশাজীবি/
          <span className="w-50 dotted d-inline-block text-center">২০২৪</span>
        </div>
      </div> */}
    </div>
  );
};

export default UniteHeader;
