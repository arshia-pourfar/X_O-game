var turn = 1;
var player1 = 0;
var player2 = 0;

function reset() {
    location.replace(location.pathname);
}

function Continues() {
    document.getElementById("winner").style.visibility = "hidden";
    document.getElementById("Continues").style.visibility = "hidden";
    document.getElementById(1).innerHTML = "&nbsp;";
    document.getElementById(2).innerHTML = "&nbsp;";
    document.getElementById(3).innerHTML = "&nbsp;";
    document.getElementById(4).innerHTML = "&nbsp;";
    document.getElementById(5).innerHTML = "&nbsp;";
    document.getElementById(6).innerHTML = "&nbsp;";
    document.getElementById(7).innerHTML = "&nbsp;";
    document.getElementById(8).innerHTML = "&nbsp;";
    document.getElementById(9).innerHTML = "&nbsp;";
    turn = 1;
}

document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;

function xo(id) {
    if (document.getElementById(id).innerHTML == "&nbsp;") {

        if ((turn % 2) != 0) {
            document.getElementById(id).innerHTML = "X";
            Winner();
            turn++;
            document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
        } else {
            document.getElementById(id).innerHTML = "O";
            Winner();
            turn++;
            document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
        }
    }
}

function Winner() {
    if (turn > 4) {
        if (document.getElementById(1).innerHTML == document.getElementById(2).innerHTML &&
            document.getElementById(2).innerHTML == document.getElementById(3).innerHTML &&
            document.getElementById(2).innerHTML != "&nbsp;") {
            document.getElementById("winner").style.visibility = "visible";
            document.getElementById("Continues").style.visibility = "visible";
            document.getElementById("winner").innerHTML = document.getElementById(2).innerHTML + " is Winner";
            if (document.getElementById(2).innerHTML == "X") {
                player1++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            } else {
                player2++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            }
        }
        if (document.getElementById(4).innerHTML == document.getElementById(5).innerHTML &&
            document.getElementById(5).innerHTML == document.getElementById(6).innerHTML &&
            document.getElementById(5).innerHTML != "&nbsp;") {
            document.getElementById("winner").style.visibility = "visible";
            document.getElementById("Continues").style.visibility = "visible";
            document.getElementById("winner").innerHTML = document.getElementById(5).innerHTML + " is Winner";
            if (document.getElementById(5).innerHTML == "X") {
                player1++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            } else {
                player2++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            }
        }
        if (document.getElementById(7).innerHTML == document.getElementById(8).innerHTML &&
            document.getElementById(8).innerHTML == document.getElementById(9).innerHTML &&
            document.getElementById(8).innerHTML != "&nbsp;") {
            document.getElementById("winner").style.visibility = "visible";
            document.getElementById("Continues").style.visibility = "visible";
            document.getElementById("winner").innerHTML = document.getElementById(8).innerHTML + " is Winner";
            if (document.getElementById(8).innerHTML == "X") {
                player1++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            } else {
                player2++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            }
        }
        if (document.getElementById(1).innerHTML == document.getElementById(4).innerHTML &&
            document.getElementById(4).innerHTML == document.getElementById(7).innerHTML &&
            document.getElementById(4).innerHTML != "&nbsp;") {
            document.getElementById("winner").style.visibility = "visible";
            document.getElementById("Continues").style.visibility = "visible";
            document.getElementById("winner").innerHTML = document.getElementById(4).innerHTML + " is Winner";
            if (document.getElementById(4).innerHTML == "X") {
                player1++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            } else {
                player2++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            }
        }
        if (document.getElementById(2).innerHTML == document.getElementById(5).innerHTML &&
            document.getElementById(5).innerHTML == document.getElementById(8).innerHTML &&
            document.getElementById(5).innerHTML != "&nbsp;") {
            document.getElementById("winner").style.visibility = "visible";
            document.getElementById("Continues").style.visibility = "visible";
            document.getElementById("winner").innerHTML = document.getElementById(5).innerHTML + " is Winner";
            if (document.getElementById(5).innerHTML == "X") {
                player1++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            } else {
                player2++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            }
        }
        if (document.getElementById(3).innerHTML == document.getElementById(6).innerHTML &&
            document.getElementById(6).innerHTML == document.getElementById(9).innerHTML &&
            document.getElementById(6).innerHTML != "&nbsp;") {
            document.getElementById("winner").style.visibility = "visible";
            document.getElementById("Continues").style.visibility = "visible";
            document.getElementById("winner").innerHTML = document.getElementById(6).innerHTML + " is Winner";
            if (document.getElementById(6).innerHTML == "X") {
                player1++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            } else {
                player2++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            }
        }
        if (document.getElementById(1).innerHTML == document.getElementById(5).innerHTML &&
            document.getElementById(5).innerHTML == document.getElementById(9).innerHTML &&
            document.getElementById(5).innerHTML != "&nbsp;") {
            document.getElementById("winner").style.visibility = "visible";
            document.getElementById("Continues").style.visibility = "visible";
            document.getElementById("winner").innerHTML = document.getElementById(5).innerHTML + " is Winner";
            if (document.getElementById(5).innerHTML == "X") {
                player1++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            } else {
                player2++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            }
        }
        if (document.getElementById(3).innerHTML == document.getElementById(5).innerHTML &&
            document.getElementById(5).innerHTML == document.getElementById(7).innerHTML &&
            document.getElementById(5).innerHTML != "&nbsp;") {
            document.getElementById("winner").style.visibility = "visible";
            document.getElementById("Continues").style.visibility = "visible";
            document.getElementById("winner").innerHTML = document.getElementById(5).innerHTML + " is Winner";
            if (document.getElementById(5).innerHTML == "X") {
                player1++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            } else {
                player2++;
                document.getElementById("demo").innerHTML = "player1 : " + player1 + "&nbsp;" + "|" + "&nbsp;" + " player2 : " + player2;
            }
        }
        if (turn == 9) {
            document.getElementById("winner").style.visibility = "visible";
            document.getElementById("Continues").style.visibility = "visible";
            document.getElementById("winner").innerHTML = "Draw";
        }
    }
}