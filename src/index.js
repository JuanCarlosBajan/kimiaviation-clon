import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./App/Styles/General.css";

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      document.getElementById("navbar").style.padding = "15px 10px";
      document.getElementById("navbar").style.marginBottom = "-30px";
      document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      //document.getElementById("navbar").style.back
      //document.getElementById("navbar").style.color = "white";
      //document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("navbar").style.marginBottom = "-80px"
      document.getElementById("navbar").style.backgroundColor = "transparent"
      //document.getElementById("logo").style.fontSize = "35px";
    }
  }

ReactDom.render(
    <App />
    ,document.getElementById("root")
);