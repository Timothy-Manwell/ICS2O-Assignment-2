// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates the area of a triangle
 */
function enterClicked() {
  //input
  const base = parseInt(document.getElementById("base-of-triangle").value)
  const height = parseInt(document.getElementById("height-of-triangle").value)

  //process
  const area = (base * height) / 2

  //output
  document.getElementById("area-of-triangle").innerHTML =
    "The area of the triangle is " + area + " cm²."
}

/**
 * This function injects the congratulations image
 */
function enterClicked() {
  document.getElementById("congratulations-banner").innerHTML =
    "<img src='./images/congratulations-banner.webp' alt='congratulations' class='image-2' />"
}
