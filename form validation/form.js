function setError(id,error){
    let element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    
}
function clearErrror(){
    errors = document.getElementsByClassName("formerror");
    for(let item of errors){
        item.innerHTML = "";
    }
}
function validateForm(){
    let returnval = true;
    clearErrror();
    let name = document.forms["myForm"]["f-name"].value;
    if(name.length < 5){
        setError("name", "* Length of name is too short");
        returnval = false;
    }
    if(name.length == 0){
        setError("name", "* Length of name is cannot be zero");
        returnval = false;
    }
    let email = document.forms["myForm"]["f-email"].value;
    if(email.length < 5){
        setError("email", "* email Length is too short");
        returnval = false;
    }
    if(email.length < 20){
        setError("email", "*email Length  is cannot be zero");
        returnval = false;
    }
    let pass = document.forms["myForm"]["f-pass"].value;
    if(pass.length < 8){
        setError("pass", "* password should be atleast 8 characters long");
        returnval = false;
    }
    let cpass = document.forms["myForm"]["f-cpass"].value;
    if(pass != cpass){
        setError("cpass", "* password and confirm password should match!");
        returnval = false;
    }
    return returnval;
} 