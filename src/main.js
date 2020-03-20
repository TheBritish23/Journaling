import { journal } from './journal';
import './styles.css';

var str = ["a", "e", "i", "o", "u"]
var v = str.split("");

//business logic for sCripture
function sCripture() {
  this.pen = [],
  this.paper = 0
}

sCripture.prototype.addWord = function(pencil) {
  pencil.id = this.assignId();
  this.pen.push(pencil);
}

//business logic for Sentence
function Sentence(firstHalf) {
  this.firstHalf = firstHalf
}

Sentence.prototype.fullWord = function() {
  return this.firstHalf
}

// user interface logic
$(document).ready(function() {
  $('#writing').submit(function(event) {
    event.preventDefault();
    document.getElementById("").display
    var goal = $('#goal').val();
    var output = (goal);
    output.forEach(function(element) {
      $('#instructions').append("<li>" + element + "</li>");
    });
  });
});
