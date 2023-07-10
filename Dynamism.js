// Get the button element by its ID
var button = document.getElementById("language-btn");

// Add an event listener for the "mouseover" event
button.addEventListener("mouseover", function() {
  // Change the background color when the mouse pointer hovers over the button
  button.style.backgroundColor = "#ff0000";
});

// Add an event listener for the "mouseout" event
button.addEventListener("mouseout", function() {
  // Reset the background color when the mouse pointer moves away from the button
  button.style.backgroundColor = "#db0001";
});
