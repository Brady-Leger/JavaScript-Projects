function full_Sentence() {
    var part_1 = "My name ";
    var part_2 = "is Peach ";
    var part_3 = "and I play ";
    var part_4 = "World of Warcraft."
    var whole_sentence = part_1.concat(part_2, part_3, part_4)
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "My go to class is Warlock!";
    var Section = Sentence.slice(39,46); // Trying to display "Warlock" //
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X =420;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 413658787953241
    document.getElementById("Precision").innerHTML = X.toPrecision(7);
}