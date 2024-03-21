$(document).ready(function(){
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  let text = $("<p></p>").text(inputValue);
  li.append(text);

  if (inputValue === '') {
      alert("You must write something!");
  } else {
      $("#list").append(li);

      // Event handler for double-clicking to strike out an item
      li.on("dblclick", function() {
          $(this).toggleClass("strike");
      });

      // Adding the delete button
      let crossOutButton = $('<button>X</button>');
      li.append(crossOutButton);

      // Event handler for deleting an item
      crossOutButton.on('click', function() {
          li.addClass("delete");
      });
  }

  $("#list").sortable(); // Make the list sortable
});