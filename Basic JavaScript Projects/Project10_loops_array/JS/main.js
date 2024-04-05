function call_Loop() {
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Classes = ["Warlock", "Hunter", "Warrior","DK","Evoker","DH"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Classes.length; Y++) {
        Content += Classes [Y] + "<br>";
    }
    document.getElementById("list_of_Classes").innerHTML = Content;
}

function dog_Pics() {
    var Dog_Picture = [];
    Dog_Picture[0] = " sleeping";
    Dog_Picture[1] = " playing";
    Dog_Picture[2] = " eating";
    Dog_Picture[3] = " barking";
    document.getElementById("Dog").innerHTML = "In this picture the dog is " + Dog_Picture[2] + ".";
}

function constant_Function() {
    const Player_Character = {type:"Tank", race:"Nelf", spec:"vengeance"};
    Player_Character.spec = "Vengeance";
    Player_Character.level = "70";
    document.getElementById("Constant").innerHTML = "The level of my " + Player_Character.type + " is " + Player_Character.level;
}

function let_Function () {
    var X = "I";
    document.write(X);
    {
        let X = "Have used a"
        document.write("<br>" + X)
        {
            let X = "A Let Function!"
            document.write("<br>" +X)
        }
    }
}

let character = {
    class: "Evoker ",
    spec:  "Augmentation ",
    level: "70 ",
    name: "Gigarawr ",
    description : function() {
        return "My main for season 4 will be my " + this.spec + this.class + ", " + this.name;
    }
};
document.getElementById("Character_Object").innerHTML = character.description();