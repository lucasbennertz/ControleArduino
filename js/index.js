const urlParams = new URLSearchParams(window.location.search);
var isLogged = urlParams.get('isLooged');

if(isLogged == false || isLogged == null){
    window.location.href = "login.html"
}