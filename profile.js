const fn = document.getElementById("fn");
const email = document.getElementById("email");
const password = document.getElementById("pswd");

const arr = JSON.parse(localStorage.getItem("accessToken"));

fn.innerText = `${arr[0]}`;
email.innerText = `${arr[1]}`;
password.innerText = `${arr[2]}`;

const logout = document.getElementById("logout");
logout.addEventListener('click', () => {
    localStorage.removeItem('accessToken');
    window.location.href = "http://127.0.0.1:5501/index.html";
});