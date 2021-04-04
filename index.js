// Add a Event listener waiting for the DOM update
document.addEventListener( "DOMContentLoaded", function () {
  updateDOM()
} );

// Should change the text on the page when DOM content has loaded
function updateDOM() {
  document.getElementById( "text" )
    .innerHTML = "This is really cool!";
}