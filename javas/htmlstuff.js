import blurbs from "./blurbs.js";
const the_blurb = document.getElementById("blurb");

the_blurb.innerHTML = blurbs[Math.floor(Math.random() * blurbs.length)];