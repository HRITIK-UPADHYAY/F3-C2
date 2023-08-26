
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const cpwd = document.getElementById("cpwd");
const errorMsg = document.getElementById("error");
const successMsg = document.getElementById("msg");

const cptAbt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smlAbt = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@$%&*-_+/";


(function userExistOrNot() {
    if(localStorage.getItem('accessToken') !== null) {
        window.location.href = "http://127.0.0.1:5501/userProfile.html";
    }
})();

const signup = document.getElementById("signup");
signup.addEventListener('click', () => {
    if((fullName.value === '' || email.value === '' || pwd.value === '' || cpwd.value === '') || (pwd.value !== cpwd.value)) {
        errorMsg.style.display = 'block';
    }
    else {
        errorMsg.style.display = 'none';
        successMsg.style.display = 'block';
        setTimeout(storeIntoLocalStorage, 1000);
    }
});

function storeIntoLocalStorage() {
    const arr = [];
    arr.push(fullName.value);
    arr.push(email.value);
    arr.push(pwd.value)
    arr.push(cpwd.value);
    arr.push(generateAccessToken(""));
    
    localStorage.setItem("accessToken", JSON.stringify(arr));
    window.location.href = "http://127.0.0.1:5501/userProfile.html";
}

function generateAccessToken(s) {  
    s += getRandomData(cptAbt);
    s += getRandomData(smlAbt);
    s += getRandomData(number);
    s += getRandomData(symbol);
    if(s.length < 16) return generateAccessToken(s);

    s = s.substring(0, 16);
    return s;
}

function getRandomData(dataset) {
    return dataset[Math.floor(Math.random() * dataset.length)];
}