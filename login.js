const email = document.getElementById('email'),
password = document.getElementById('password'),
emailErr = document.getElementById('emailErr'),
passErr = document.getElementById('passErr'),
LogInArea = document.getElementById('LogInArea'),
login = document.getElementById('login');

function checkFieldEmpty(e) {
    if(e.value!=""){
        e.classList.add("valid");
    }
    else{
        e.classList.remove("valid");
    }
}
function checkEmail(){
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.match(pattern)){
        emailErr.setAttribute("class", "fa fa-circle-check");
        emailErr.setAttribute("style", "color: rgb(0, 242, 0)");
        email.setAttribute("style", "border-bottom: 2px solid rgb(0, 242, 0)");
        emailErr.removeAttribute("aria-label");
        return true;
    } else{
        email.setAttribute("style", "border-bottom: 2px solid #ff4433")
        emailErr.setAttribute("class", "fa fa-circle-exclamation");
        emailErr.setAttribute("style", "color: #ff4433");
        emailErr.setAttribute("aria-label", "Please Enter Valid Email");
        return false;
    }
}
function checkPassword(){
    if(password.value != ""){
        passErr.setAttribute("class", "fa fa-circle-check");
        passErr.setAttribute("style", "color: rgb(0, 242, 0)");
        password.setAttribute("style", "border-bottom: 2px solid rgb(0, 242, 0)");
        passErr.removeAttribute("aria-label");
        return true;
    }else{
        password.setAttribute("style", "border-bottom: 2px solid #ff4433")
        passErr.setAttribute("class", "fa fa-circle-exclamation");
        passErr.setAttribute("style", "color: #ff4433");
        passErr.setAttribute("aria-label", "Please Enter Password");
        return false;
    }
}
function DoValidate()  {
    let IsLogin = checkEmail();
    let IsPassword = checkPassword();
    if(IsLogin && IsPassword)
}

