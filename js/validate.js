$(document).ready(function()
{
    $("#submitBtn").click(function(e)
    {
        $("#nameError").html("");
        $("#emailError").html("");
        $("#messageError").html("");
        let val = validate();
        if(val[0] || val[1] || val[2])
        {
            e.preventDefault();
            if(val[0])
            {
                $("#nameError").html("Please enter a valid name");
            }
            if(val[1])
            {
                $("#emailError").html("Please enter a valid email");
            }
            if(val[2])
            {
                $("#messageError").html("Please enter a message");
            }
        } 
    });
});
function validate()
{
    let name = false;
    let email = false;
    let message = false;
    // if name contains numnbers, name = true
    if($("#name").val().toLowerCase().indexOf("1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0") >= 0 || $("#name").val() == "")
    {
        name = true;
    }
    // if not a valid email, email = true
    if($("#email").val().toLowerCase().indexOf("@" || ".com" || ".edu") < 0)
    {
        email = true;
    }
    // if message is blank, message = true
    if($("#message").val() == "")
    {
        message = true;
    }
    return [name, email, message];
}