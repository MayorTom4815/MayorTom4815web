var emailbutton = document.querySelector("#emailbutton");
var email = document.querySelector("#email", "input");

function ToClipboard(){
    navigator.clipboard.writeText(email.value)
    
}
