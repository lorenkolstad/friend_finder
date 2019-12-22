let friendship = require("friends.js");

// Submitting results functions
$("#submit-results").on("click", function(event){
    event.preventDefault()
    console.log("You've been clicked!")

    // call apiRoutes  AJAX
    $.post("/api/friends", friendship, function(data){

        console.log(friendship);
    }) 

})

    for (let selector in config) {
        $(selector).chosen(config[selector]);
        }

        // Capture the form inputs
        $("#submit").on("click", function(event) {
        event.preventDefault();

        // Form validation
        function validateForm() {
            var isValid = true;
            $(".form-control").each(function() {
            if ($(this).val() === "") {
                isValid = false;
            }
        });

        $(".chosen-select").each(function() {

            if ($(this).val() === "") {
                isValid = false;
            }
        });
            return isValid;
        }

        // If all required fields are filled
        if (validateForm()) {
          // Create an object for the user"s data
        var userData = {
            name: $("#inputName").val().trim(),
            photo: $("#inputPhoto").val().trim(),
            scores: [
                $("#question-1").val(),
                $("#question-2").val(),
                $("#question-3").val(),
                $("#question-4").val(),
                $("#question-5").val(),
                $("#question-6").val(),
                $("#question-7").val(),
                $("#question-8").val(),
                $("#question-9").val(),
                $("#question-10").val()
            ]
        };

          // AJAX post the data to the friends API.
        $.post("/api/friends", userData, function(data) {

            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);


        });
        } else {
            alert("It looks like you may have missed a question!");
        }
    });
    