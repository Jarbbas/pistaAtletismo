
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
    var result900m = ((seconds / 4)*9);
    var result1000m = ((seconds / 4)*10);
    var result1100m = ((seconds / 4)*11);
    var result1200m = ((seconds / 4)*12);
    var result1300m = ((seconds / 4)*13);
    var result1400m = ((seconds / 4)*14);
    var result1500m = ((seconds / 4)*15);
   
    /** variaveis para pista */
    document.getElementById("100lap").innerHTML = convertTime(result100m);
    document.getElementById("200lap").innerHTML = convertTime(result200m);
    document.getElementById("300lap").innerHTML = convertTime(result300m);
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
    document.getElementById("900").innerHTML = "<b>" + convertTime(result900m);
    document.getElementById("1000").innerHTML = "<b>" + convertTime(result1000m);
    document.getElementById("1100").innerHTML = "<b>" + convertTime(result1100m);
    document.getElementById("1200").innerHTML = "<b>" + convertTime(result1200m);
    document.getElementById("1300").innerHTML = "<b>" + convertTime(result1300m);
    document.getElementById("1400").innerHTML = "<b>" + convertTime(result1400m);
    document.getElementById("1500").innerHTML = "<b>" + convertTime(result1500m);

    var track = document.getElementById("track");
    var table = document.getElementById('table');
    track.classList.add("fade");
    table.classList.add("fade");
 }


 /** funcções para as lanes */
 function lane(laneNumber) {
    var m = document.getElementById("minutes").value;
    var s = document.getElementById("seconds").value;

    if (s == 0 || s === "") {
        seconds = (parseInt(m)*60);
    } else {
        seconds = ((parseInt(m)*60) + parseInt(s));
    }

    switch (laneNumber) {
        case 1:
            var distance = 4;
            break;
        case 2:
            var distance = 4.07;
            break;
        case 3:
            var distance = 4.14;
            break;
        case 4:
            var distance = 4.22;
            break;
        case 5:
            var distance = 4.30;
            break;
    
    }
    /** LANE 1 */
    var lane100m = (seconds / distance);
    var lanet200m = ((seconds / distance)*2);
    var lanet300m = ((seconds / distance)*3);
    var lanet400m = ((seconds / distance)*4);
    
    /** variaveis para pista */
    document.getElementById("100lap").innerHTML = convertTime(lane100m);
    document.getElementById("200lap").innerHTML = convertTime(lanet200m);
    document.getElementById("300lap").innerHTML = convertTime(lanet300m);
    document.getElementById("400lap").innerHTML = convertTime(lanet400m); 
 }


 function nextSlide(n) {
    showSlide(slideIndex += n)
}

function currentSlide(n) {
    showSlide(slideIndex = n);
    
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName('mySlide');
    var dots = document.getElementsByClassName('dotBtn');

    // verifica o patamar superior
    if (n > slides.length) {
        slideIndex = 1;
    }

    // verifica o patamar inferior
    if (n < 1) {
        slideIndex = slides.length;
    }

    // esconde todos os slides e dots activos
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].className = dots[i].className.replace('active', '');
    }

    // mostrar o slide ativo e o dot
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

 // inicializar o slide no primeiro
 var slideIndex = 1;
 showSlide(slideIndex);