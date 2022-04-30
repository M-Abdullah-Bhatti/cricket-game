//Player Team Name:

function team() {
    let t = document.getElementById("team").value;
    document.getElementById("first").innerHTML = t;
    if (document.getElementById("first").innerHTML == document.getElementById("second").innerHTML) {
        document.getElementById("first").innerHTML += " A";
    }
    document.getElementById("first").style.cssText = "color : Green";

}

// Opponent Team Name:

function Team() {
    let t = document.getElementById("tea").value;
    document.getElementById("second").innerHTML = t;
    if (document.getElementById("first").innerHTML == document.getElementById("second").innerHTML) {
        document.getElementById("second").innerHTML += " A";
    }
    document.getElementById("second").style.cssText = "color : red";

}

let target = Math.floor(Math.random() * (35 - 28 + 1) + 25);



//Autoplay click Button:


function auto_click() {
    let sc = "Your target is " + target;
    alert(sc);
    document.getElementById("Team").innerHTML = document.getElementById("team").value;
    document.getElementById("req").innerHTML = target;
}

//Submit Button:

let score = 0;
let wickets = 2;

function sub() {

    let r = parseInt(document.getElementById("our_run").value);
    let rr = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.getElementById("opp_run").value = rr;

    if (r >= 1 && r <= 6 && r != rr) {
        score += r;
        document.getElementById("score").innerHTML = score;
        document.getElementById("req").innerHTML = target - score;

        if (score >= target) {
            let a = document.getElementById("Team").innerHTML = document.getElementById("team").value;
            res = document.getElementById("wick").innerHTML;
            document.getElementById("result").innerHTML = a + " Won The Match By " + res + " Wickets";
            document.getElementById("result").style.cssText = ("color:green");
        }

        else if (score >= (target - 1)) {
            document.getElementById("result").innerHTML = "Score Level";
        }
    }

    else if (r >= 7 || r <= 0 || r == rr) {
        alert("You are out!");
        wickets -= 1;
        document.getElementById("wick").innerHTML -= 1;
        if ((score >= (target - 1)) && (document.getElementById("wick").innerHTML == 0)) {
            document.getElementById("result").innerHTML = "Match Has Been Drawn";
            document.getElementById("result").style.cssText = ("color:red");
        }

        else if (document.getElementById("wick").innerHTML == 0) {
            let a = document.getElementById("Team").innerHTML = document.getElementById("team").value;
            res = target - score;
            document.getElementById("result").innerHTML = a + " Lost The Match By " + res + " Runs";
            document.getElementById("result").style.cssText = ("color:red");
        }
    }
}

function reload() {
    location.reload();
}