import { journal } from './journal';
import './styles.css';

var vowels = ["a", "e", "i", "o", "u"]
var v = vowels.entries();

//business logic for sCripture
function sCripture() {
  this.pen = [],
  this.paper = 0
}

sCripture.prototype.addWord = function(pencil) {
  pencil.id = this.assignId();
  this.pen.push(pencil);
}



// user interface logic
$(document).ready(function() {
  $('#writing').submit(function(event) {
    event.preventDefault();
    document.getElementById("").display=""
    var goal = $('#goal').val();
    var output = p\(goal);
    output.forEach(function(element) {
      $('#instructions').append("<li>" + element + "</li>");
    });
  });
});
