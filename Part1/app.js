"use strict";

$(function () {
  console.log("Let’s get ready to party with jQuery!");
});

$("img").addClass("image-center");

const $paragraphs = $("p");

$paragraphs.eq($paragraphs.length - 1).remove();

$("body").css("font-size", Math.floor(Math.random() * 100));

$("ol").append("<li>This is my simple addition</li>");

$("aside").remove();

$("div .row").eq(0).append("<p>I am so sorry for that hidious list</p>");

const $rgbvals = $(".form-control");

$rgbvals.on("mouseout", function () {
  let red = +$rgbvals.eq(0).val();
  let green = +$rgbvals.eq(1).val();
  let blue = +$rgbvals.eq(2).val();
  $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
});
