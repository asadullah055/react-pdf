import JsPDF from "jspdf";
import React from "react";
// import "../../assets/SolaimanLipi_20-04-07-normal.js";
import bensen from "../../assets/font/BenSen.ttf";
import DoatAndTablig from "./DoatAndTablig";
import UniteHeader from "./UniteHeader";
const LoadData = () => {
  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.addFileToVFS("BenSen.ttf", bensen);
    report.addFont("BenSen.ttf", "BenSen", "normal");
    report.setFont("BenSen");
    const source = document.getElementById("report");
    console.log("fonts", report.getFontList());

    report.html(source, {
      callback: () => {
        report.save("report.pdf");
      },
      x: 15,
      y: 15,
      width: 1000,
    });
  };
  return (
    <>
      <div id="report" className="container" style={{ width: "21cm" }}>
        <UniteHeader />
        <DoatAndTablig />
      </div>
      <button onClick={generatePDF} type="button">
        Click
      </button>
    </>
  );
};

export default LoadData;
