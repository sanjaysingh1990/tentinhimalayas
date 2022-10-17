function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
} 

function updateCounter() {
    var updateCounterRef = firebase.database().ref("pagevisitcounter/");

    updateCounterRef
        .child('totalCount')
        .set(firebase.database.ServerValue.increment(1))

}

$(document).ready(function() {

     
    var cookieValue = getCookie("interval");
    //  alert('cookie value ' + cookieValue);
    if (cookieValue.length === 0) {
        setCookie("interval", 1, 1);
        updateCounter();
    }



});