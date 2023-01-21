"use strict";
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const nav = document.querySelector(".primary-nav__links");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");

navToggleBtn.addEventListener("click", () => {
  bar1.toggleAttribute("active");
  bar2.toggleAttribute("active");
  bar3.toggleAttribute("active");
});

navToggleBtn.addEventListener("click", () => {
  nav.toggleAttribute("visible");
});

//close nav when clicked on it
nav.addEventListener("click", () => {
  nav.removeAttribute("visible");
  bar1.removeAttribute("active");
  bar2.removeAttribute("active");
  bar3.removeAttribute("active");
});
