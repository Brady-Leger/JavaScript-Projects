function my_dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Brown",
        Breed:"Aussie Shep",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}