document.write("10" + 5);

document.write(typeof "Word");

function Func1() {
    document.getElementById("Func1").innerHTML = 0/0;
    return Func1
}

function Func2() {
    document.getElementById("Func2").innerHTML = isNaN('This is a string');
}

function Func3() {
    document.getElementById("Func3").innerHTML = isNaN('777');
}

function Infin() {
    document.write(2E310);
}

function NegInfin(){
    document.write(-3E310);
}

function TrueBoo(){
    document.write(10>3);
}

function FalseBoo(){
    document.write(10<3);
}

console.log(2+2);
console.log(10<3)

function TrueEqual(){
    document.write(10==10);
}

function FalseEqual(){
    document.write(10==9);
}

r = 11
x = 10;
y = 10;
z = "10";

function FalseTEqual1(){
    document.write(x===z);
}

function TrueTEqual(){
    document.write(x===y);
}

function FalseTEqual2(){
    document.write(x===r);
}

function AndTrue(){
    document.write(5 > 2 && 10 > 4);
}

function AndFalse(){
    document.write(5 > 10 && 10 > 4);
}

function OrTrue(){
    document.write(5 > 2 || 10 > 4);
}

function OrFalse(){
    document.write(5 > 10 || 10 > 20);
}

function NotFalse(){
    document.getElementById("NotFalse").innerHTML = !(20 > 10);
}

function NotTrue(){
    document.getElementById("NotTrue").innerHTML = !(5 > 10);
}