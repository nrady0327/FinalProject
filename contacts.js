$(document).ready(function ()
{

//write the rules and messages for the labels
    var myRules =
        {
            required: true
        };
    var myMessages =
        {
            required: "This field is required!"
        };

//tell jquery to look for a button and perform a function

    $("button#messageButton").click(submitMessage);


//create function for the button
    function submitMessage()
    {
        var person = $("#contactSection").val();
        var message = $("#messageSection").val();
        //tell jquery to look for the results id and create a variable with a string of text to replace the id
        $("#messageResults").text(`The message was successfully sent to: `+ person );
    }

//validate the rules
$("form").validate(

    {
        submitHandle: submitMessage,
        rules: myRules,
        messages: myMessages
    }
);



});