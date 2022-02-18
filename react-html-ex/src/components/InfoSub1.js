import React from "react";

import "../css/info1.css";

const InfoSub1 = () => {
  return (
    <div id="infosub1">
      <h2>1,439세대 대단지. 스케일부터 다릅니다.</h2>
      <div class="img">
        <img src="/img/pic_ca1_img01.jpg" alt="조감도" />
      </div>

      <h3>주택공급현황</h3>
      <p class="right">
        <img src="/img/ico_a.gif" alt="아파트" />
        아파트
        <img src="/img/ico_o.gif" alt="오피스텔" />
        오피스텔
      </p>

      <table>
        <caption>주택공급현황</caption>
        <thead>
          <tr>
            <th scope="col">면적</th>
            <th scope="col">구분</th>
            <th scope="col">일반분양</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src="/img/ico_a.gif" alt="아파트" />
              전용면적
            </td>
            <td>84.469cm</td>
            <td>167</td>
          </tr>
          <tr>
            <td>
              <img src="/img/ico_o.gif" alt="오피스텔" />
              전용면적
            </td>
            <td>84.469cm</td>
            <td>167</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <th colspan="2">합계</th>
            <th>1,234세대</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InfoSub1;
