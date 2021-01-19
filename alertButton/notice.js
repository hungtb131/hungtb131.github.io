

let alert = document.querySelector('.notice-mes');
let ulAlert = document.querySelector('.ul-notice');
let button = document.querySelector('.btn');

button.onclick = function () {
    let li = document.createElement("li");
    li.innerHTML = "The Black Rose shall bloom once more.";
    ulAlert.append(li);
    let time = setInterval(function () {
        ulAlert.removeChild(li)
    },2000)
}