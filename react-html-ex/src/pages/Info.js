import React from "react";

import { NavLink, Routes, Route } from "react-router-dom";
import InfoSub1 from "../components/InfoSub1";
import InfoSub2 from "../components/InfoSub2";

import "../css/tab.css";

const Info = () => {
  return (
    <div id="tab">
      <ul>
        <NavLink to="infosub1">
          <li>분양안내</li>
        </NavLink>
        <NavLink to="infosub2">
          <li>단지안내</li>
        </NavLink>
      </ul>

      {/*--- 페이지 역할을 할 컴포넌트 구성하기---*/}
      <Routes>
        <Route path="infosub1" elemet={[InfoSub1]} exact={true} />
        <Route path="infosub2" elemet={[InfoSub2]} />
      </Routes>
    </div>
  );
};

export default Info;
