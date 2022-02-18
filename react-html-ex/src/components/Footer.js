import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <ul>
        <li>
          <a href="tel:12345678">
            <img src="/img/qlink_call.gif" alt="분양상담전화" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/img/qlink_map.gif" alt="찾아오시는 길" />
          </a>
        </li>
      </ul>
      <address>Copyright 2014. HANGANG VILLAGE</address>
    </div>
  );
};

export default Footer;
