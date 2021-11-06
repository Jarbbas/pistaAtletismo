function convertTime(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds; // Return is HH : MM : SS
}


function display() {
    var m = document.getElementById("minutes").value;
    var s = document.getElementById("seconds").value;

    if (s == 0 || s === "") {
        seconds = (parseInt(m)*60);
    } else {
        seconds = ((parseInt(m)*60) + parseInt(s));
    }
    var result100m = (seconds / 4);
    var result200m = ((seconds / 4)*2);
    var result300m = ((seconds / 4)*3);
    var result400m = ((seconds / 4)*4);
    var result500m = ((seconds / 4)*5);
    var result600m = ((seconds / 4)*6);
    var result700m = ((seconds / 4)*7);
    var result800m = ((seconds / 4)*8);
    
    /** variaveis para pista */
    document.getElementById("100lap").innerHTML =  convertTime(result100m);
    document.getElementById("200lap").innerHTML =  convertTime(result200m);
    document.getElementById("300lap").innerHTML =  convertTime(result300m);
    document.getElementById("400lap").innerHTML = convertTime(result400m);
    /** variaveis para a tabela*/ 
    document.getElementById("100").innerHTML = "<b>" + convertTime(result100m);
    document.getElementById("200").innerHTML = "<b>" + convertTime(result200m);
    document.getElementById("300").innerHTML = "<b>" + convertTime(result300m);
    document.getElementById("400").innerHTML = "<b>" + convertTime(result400m);
    document.getElementById("500").innerHTML = "<b>" + convertTime(result500m);
    document.getElementById("600").innerHTML = "<b>" + convertTime(result600m);
    document.getElementById("700").innerHTML = "<b>" + convertTime(result700m);
    document.getElementById("800").innerHTML = "<b>" + convertTime(result800m);

 }