function Age_Function(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."
}

function Character(Class, Race, Spec, Level) {
    this.Character_Class = Class;
    this.Character_Race = Race;
    this.Character_Spec = Spec;
    this.Character_Level = Level;
}
var Peach = new Character("Demon Hunter", "Night Elf", "Vengeance", 70);
var Jake = new Character("Hunter", "Human", "Marksman", 70);
var Apricots = new Character("Monk", "Void Elf", "Brewmaster", 70)
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Peach has a level " + Peach.Character_Level + " " + Peach.Character_Spec + " " + Peach.Character_Class + " and it is a " + Peach.Character_Race + ".";
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point
    }
}