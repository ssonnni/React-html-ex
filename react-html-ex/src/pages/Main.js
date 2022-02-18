import React from "react";
import { Link } from "react-router-dom";

import "./css/common.css";
import "./css/index.css";
import "./css/reset.css";

const Main = () => {
  return (
    <div id="main">
      <h2>편안한 보금자리를 약속드립니다. 한강빌리지</h2>
      <ul>
        <li>
          <Link to="/info/infosub1">분양안내</Link>
        </li>
        <li>
          <a href="#" id="icon2">
            프리미엄
          </a>
        </li>
        <li>
          <Link to="/info/infosub2">단지안내</Link>
        </li>
        <li>
          <a href="#" id="icon4">
            인테리어
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Main;
