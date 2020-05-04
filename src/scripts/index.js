import { data } from "./data.js";

let parsedData = JSON.parse(data);
console.log(parsedData);

const section = document.querySelector("#tab1");

parsedData.forEach((obj) => {
  let { id, title, image } = obj;

  let card = `
        <div id=${id}>
                
                <h2> ${title} </h2>
                <img src=${image} alt=${title}>
               
   
        </div> `;

  section.innerHTML += card;
});

// -----------------------------------
// -----------------------------------
// ----------------2-------------------
// -----------------------------------
// -----------------------------------
import { data2 } from "./data.js";

let parsedData2 = JSON.parse(data2);
const section2 = document.querySelector("#tab2");

parsedData2.forEach((obj2) => {
  let { id, title, image } = obj2;
  let card2 = `
        <div id=${id}>

                <h2> ${title} </h2>
                <img src=${image} alt=${title}>
              

        </div> `;

  section2.innerHTML += card2;
});

// -----------------------------------
// -----------------------------------
// ----------------3------------------
// -----------------------------------
// -----------------------------------
import { data3 } from "./data.js";

let parsedData3 = JSON.parse(data3);
const section3 = document.querySelector("#tab3");

parsedData3.forEach((obj) => {
  let { id, title, image } = obj;
  let card3 = `
  <div id=${id}>

          <h2> ${title} </h2>
          <img src=${image} alt=${title}>
        

  </div> `;

  section3.innerHTML += card3;
});
// -----------------------------------
// -----------------------------------
// ----------------4------------------
// -----------------------------------
// -----------------------------------

import { data4 } from "./data.js";

let parsedData4 = JSON.parse(data4);
const section4 = document.querySelector("#tab4");

parsedData4.forEach((obj) => {
  let { id, title, image } = obj;
  let card4 = `
  <div id=${id}>

          <h2> ${title} </h2>
          <img src=${image} alt=${title}>
        

  </div> `;

  section4.innerHTML += card4;
});

// -----------------------------------
// -----------------------------------
// ----------------5------------------
// -----------------------------------
// -----------------------------------
import { data5 } from "./data.js";

let parsedData5 = JSON.parse(data5);
const section5 = document.querySelector("#tab5");

parsedData5.forEach((obj) => {
  let { id, title, image } = obj;
  let card5 = `
  <div id=${id}>

          <h2> ${title} </h2>
          <img src=${image} alt=${title}>
        

  </div> `;

  section5.innerHTML += card5;
});
// -----------------------------------
// -----------------------------------
// ----------------6-------------------
// -----------------------------------
// -----------------------------------

import { data6 } from "./data.js";

let parsedData6 = JSON.parse(data6);
const section6 = document.querySelector("#tab6");

parsedData6.forEach((obj) => {
  let { id, title, image } = obj;
  let card6 = `
  <div id=${id}>

          <h2> ${title} </h2>
          <img src=${image} alt=${title}>
        

  </div> `;

  section6.innerHTML += card6;
});
// -----------------------------------
// -----------------------------------
// ----------------7-------------------
// -----------------------------------
// -----------------------------------

import { data7 } from "./data.js";

let parsedData7 = JSON.parse(data7);
const section7 = document.querySelector("#tab7");

parsedData7.forEach((obj) => {
  let { id, title, image } = obj;
  let card7 = `
  <div id=${id}>

          <h2> ${title} </h2>
          <img src=${image} alt=${title}>
        

  </div> `;

  section7.innerHTML += card7;
});
// -----------------------------------
// -----------------------------------
// ----------------8-------------------
// -----------------------------------
// -----------------------------------

import { data8 } from "./data.js";

let parsedData8 = JSON.parse(data8);
const section8 = document.querySelector("#tab8");

parsedData8.forEach((obj) => {
  let { id, title, image } = obj;
  let card8 = `
  <div id=${id}>

          <h2> ${title} </h2>
          <img src=${image}  alt=${title}>
        

  </div> `;

  section8.innerHTML += card8;
});
