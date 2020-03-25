import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

//var v = str.split("");

function sCripture() {
  this.pen = [],
  this.paper = 0;
}

sCripture.prototype.addWord = function(pencil) {
  pencil.id = this.assignId();
  this.pen.push(pencil);
};

//business logic for Sentence
function Sentence(firstHalf) {
  this.firstHalf = firstHalf;
}

function getTeaser(phrase) {
  return phrase.slice(0, 8);
}

function countWords(phrase) {
  return phrase.length;
}

Sentence.prototype.fullWord = function() {
  return this.firstHalf;
};

// user interface logic
$(document).ready(function() {
  //console.log("document is ready");
  $('#writing').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = goal.split(" ");
    var teaser = getTeaser(output);
    var outputTest = teaser.join(" ");
    //console.log("testing", outputTest);
    $("#instructions").append("<li>" + outputTest + "</li>");
    // output.forEach(function(element) {
    //   $('#instructions').append("<li>" + element + "</li>");
    // });
    alert("The number words you entered are  " + countWords(output));
  });
});
