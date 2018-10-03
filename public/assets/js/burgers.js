// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // must match handle bars
    //change devoured .onclick function then storing the id data into a var.
    // taking the attr from the data-inidevoured to be later used as a way to change its "devoured state"
    //
    $(".change-devoured").on("click", function (event) {
        let id = $(this).data("id");

        let iniDevoured = $(this).attr("data-iniDevoured");

        console.log("Your id is" + id);
        console.log("iniDevoured: " + iniDevoured)
        let iniDevouredState = {
            devoured: iniDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: iniDevouredState
        }).then(
            function () {
                console.log("changed state to", iniDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    // targetting the class create form from the handlebar index.
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        let burger_burger = {
            burger_name: $("#ca").val().trim()
        };
        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: burger_burger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});