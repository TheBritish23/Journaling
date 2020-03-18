import { Journal } from './journal';
import './styles.css';



// user interface logic
$(document).ready(function() {
  $('#writing').submit(function(event) {
    event.preventDefault();
