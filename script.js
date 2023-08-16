const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginErrorMsg.style.opacity = 0;
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "kushi"||"prajna"||"nanditha" && password === "123"||"2004"||"2002"||"2003") {
        //alert("You have successfully logged in.");
       window.location.href = "http://127.0.0.1:5500/crops.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (username === "kushi" && password === "123") {
            loginErrorMsg.style.opacity = 1;}
    else{
        window.location.href = "http://127.0.0.1:5500/signup.html";
    }

    
})

