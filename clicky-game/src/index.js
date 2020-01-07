import React from "react";
import { render } from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./App";

render([<Header key="1" />, <App key="2" />, <Footer key="3" />], document.getElementById("root"));
