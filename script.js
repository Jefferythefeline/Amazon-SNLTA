const $ = document.querySelector.bind(document)
const logsignbtn = $('.login-signup')

if (!checkActive) {
    errorLogin.classList.add("active-error")
} else {
    alert("Login success")
    location.href = "./index.html"
    logsignbtn.classList.remove('.hide')
} 
