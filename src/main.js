import './styles.css';

//business logic for sCripture
var str = ["a", "e", "i", "o", "u"];
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
    var outputTest = output.join(" ");
    //console.log("testing", outputTest);
    $("#instructions").append("<li>" + outputTest + "</li>");
    // output.forEach(function(element) {
    //   $('#instructions').append("<li>" + element + "</li>");
    // });
    alert("And the 8 words are...");
  });
});
