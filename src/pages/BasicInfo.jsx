import React from "react";

export default function BasicInfo() {
  return (
    <>
      <div id="basicInfo">
        <h1>Hier kan je de basis informatie vinden!</h1>
        <table>
          <tr>
            <td>Naam:</td>
            <td>Bram De Coster</td>
          </tr>
          <tr>
            <td>Geboorteplaats:</td>
            <td> Brugge, België</td>
          </tr>
          <tr>
            <td>Geboortedatum:</td>
            <td>04/04</td>
          </tr>
          <tr>
            <td>Middelbaar diploma:</td>
            <td>Wetenschappen 6uur wiskunde</td>
          </tr>
          <tr>
            <td>Studie:</td>
            <td>Toegepaste Informatica (software en web-development)</td>
          </tr>
          <tr>
            <td>School:</td>
            <td>Hogent, Gent</td>
          </tr>
        </table>
      </div>
    </>
  );
}
