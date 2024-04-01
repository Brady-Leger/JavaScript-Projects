var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//The above is a Global Variable //

function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100)
}
Add_numbers_1();
Add_numbers_2();

// The above is a Local Variable //

function Add_numbers_1() {
    var X = 10;
    console.log(15 + X)
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

// This utilizes the developer tools on the browser page //

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// Greeting function //

function Question_1 () {
    Answer = document.getElementById("Answer").value;
    if (Answer >= 7) {
        Number = "Correct it is 7!";
    }
    else {
        Number = "WRONG THAT WAS WRONG!";
    }
    document.getElementById("Lucky_Number").innerHTML = Number;
}

// This code requires input from the user to guess my lucky number //

function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time> 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply
}