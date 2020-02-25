// let friends = require("friends.js");

// Need to create the on-clicks
// Need to add in validation
$("#submit-user").on("click", function (event) {
    console.log("Submitted!")
    event.preventDefault();


    function validateForm() {
        let isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false
            }
        });

        $(".chosen-select").each(function () {
            if ($(this).val() === "") {
                isValid = false
            }
        })

        return isValid;
    }

    if (validateForm()) {
        let newUser = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        }

        $("submit-user").click(function () {
            app.post("/api/friends", newUser, function (data) {
                console.log(data)
                $("#newUserName").text(data.name)
                $("#newUserPhoto").attr("src", data.photo)
            })
        })
    } else {
        alert("Looks like you missed something! Please complete all fields before submitting.")
    }
});