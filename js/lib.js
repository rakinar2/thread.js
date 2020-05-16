

/*!
*   Thread Javascript Library
*   Coded & Developed by Ar. Rakin
*   GitHub: 
*     - https://rakinar2.github.io/
*     - https://github.com/rakinar2/
*   Copyright (c) Ar. Rakin 2020,
*   All Rights Reserved.
*   NOTE: This Javascript Library is in development.
*         More features will be added here soon. (Like JQuery)
*/


// Selector function

var $ = function(selector){
    element = document.querySelector(selector);
    return element;
};

// useful methods to '$' object

  $.html = function(element){
    return $(element).innerHTML;
  };
  
  $.text = function(element){
    return $(element).innerTEXT;
  };
    
  $.fadeOut = function(element, speed){
      var a = setInterval(fn, 100);
      var c = $(element);
      var s = c.style.opacity;
      
      function fn() {
       c.style.transition = speed + "s";
       c.style.opacity = s - "0";
      }
      
  };
  
  $.fadeIn = function(element, speed){
      var a = setInterval(fn, 100);
      var c = $(element);
      var s = c.style.opacity;
      
      function fn() {
       c.style.transition = speed + "s";
       c.style.opacity = s + "1";
      }
      
  };

