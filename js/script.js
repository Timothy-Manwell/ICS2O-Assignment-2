// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function injects the function that calculates the area of a triangle
 */

function startClicked() {
  document.getElementById("height-numeric-textfeild").innerHTML =
  "<form action='#'>
  <p>Base in cm</p>
    <div class='mdl-textfield mdl-js-textfield'>
      <input
        class='mdl-textfield__input'
        type='text'
        pattern='-?[0-9]*(\.[0-9]+)?'
        id='base-of-triangle'
      />
      <label class='mdl-textfield__label' for='base-entered'
        >Base here ...</label
      >
      <span class='mdl-textfield__error'>Input is not a number!</span>
    </div>
  </form>
  document.getElementById("perimeter").innerHTML = 
  "<form action='#'>
    <p>Height in cm</p>
    <div class='mdl-textfield mdl-js-textfield'>
      <input
        class='mdl-textfield__input'
        type='text'
        pattern='-?[0-9]*(\.[0-9]+)?'
        id='height-of-triangle'
      />
      <label class='mdl-textfield__label' for='height-entered'
        >Height here ...</label
      >
      <span class='mdl-textfield__error'>Input is not a number!</span>
    </div>
  </form>"
  
  document.getElementById("").innerHTML = "<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="enterClicked()"
>Enter</button>"
}

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
