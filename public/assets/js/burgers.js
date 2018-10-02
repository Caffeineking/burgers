// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // must match handle bars
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        
        var iniDevoured = $(this).attr("data-iniDevoured");
     
        console.log("Your id is" + id);
        console.log("iniDevoured: " + iniDevoured)
        var iniDevouredState = {
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

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var burger_burger = {
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