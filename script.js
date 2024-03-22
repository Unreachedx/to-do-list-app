function newItem() {
    let inputValue = $("#input").val().trim(); // Fetch input value and trim any whitespace

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let li = $("<li></li>");
        let text = $("<p></p>").text(inputValue);
        li.append(text);

        $("#list").append(li);

        // Event handler for double-clicking to strike out an item
        li.on("dblclick", function () {
            $(this).toggleClass("strike");
        });

        // Adding the delete button
        let crossOutButton = $('<button>X</button>');
        li.append(crossOutButton);

        // Event handler for deleting an item
        crossOutButton.on('click', function () {
            li.addClass("delete");
        });
    }
}