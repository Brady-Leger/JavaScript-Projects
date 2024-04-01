window.alert(Math.random());

function Math(a,b) { // Adds
    return a + b;
}

function Math2(a,b) { // Subtracts 
    return a - b;
}

function Math3(a,b) { // Multiplies
    return a * b;
}

function Math4(a,b) { // Divides
    return a / b;
}

function Math5(a,b,c) { // Divides then adds
    return a / b + c;
}

function Math6 () { // Shows remainder of 5/2 
    var simple_math = 5 % 2;
    return simple_math
}

function Math7 () { // Makes X Negative
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
    return x
}

function Math8 () { // Increases X by 1
    var x = 10;
    x++;
    document.write(x);
}

function Math9 () { // Decreases X by 1
    var y = 10;
    y--;
    document.write(y);
}

function Math10 () {
    return Math.cbrt(x)
}