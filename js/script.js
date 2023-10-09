"use strict";

const hearts = document.querySelectorAll(".heart");
const Wrapper = document.querySelector(".wrapper");

const myHeart = document.createElement("div");

myHeart.classList.add("heart");
Wrapper.append(myHeart);
