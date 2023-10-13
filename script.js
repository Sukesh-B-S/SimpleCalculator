// Function for clear the dispaly
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}

//  mathmatical calculation done by this function
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}