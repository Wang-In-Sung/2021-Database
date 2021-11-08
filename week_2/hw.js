function range_setup() {
    document.getElementById("maxNum").innerHTML= document.getElementById("js-range").value;
    document.getElementById("guessNum").max = document.getElementById("js-range").value;
 }


function play() {
    var userNum = document.getElementById("guessNum").value;
    var cpuNum = Math.floor(Math.random() * document.getElementById("guessNum").max);
    
    if(userNum == ""){
        alert('Enter number');
        location.reload();
    }

    if(userNum >= cpuNum) {
        document.getElementById("result").innerHTML = "You choose : " + userNum + ", the machine choose : " + cpuNum 
        + "<br><strong>You Win!</strong>";
    }
    else {
        document.getElementById("result").innerHTML = "You choose : " + userNum + ", the machine choose : " + cpuNum 
        + "<br><strong>You lost!</strong>";
    }
 }