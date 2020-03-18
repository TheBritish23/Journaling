import { journal } from './journal';
import './styles.css';



// user interface logic
$(document).ready(function() {
  $('#writing').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = p\(goal);
    output.forEach(function(element) {
      $('#instructions').append("<li>" + element + "</li>");
    });
  });
});
