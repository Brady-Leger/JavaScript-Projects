function class_Function() {
    var Class_Output;
    var Class = document.getElementById("Class_Input").value;
    var Class_String = " is a great class!";
    switch(Class) {
        case "DH":
            Class_Output = "DH" + Class_String;
        break;
        case "DK":
            Class_Output = "DK" + Class_String;
            break;
            case "Hunter":
                Class_Output = "Hunter" + Class_String;
                break;
                case "Evoker":
                    Class_Output = "Evoker" + Class_String;
                    break;
                    case "Shaman":
                    Class_Output = "Shaman" + Class_String
                    break;
                    default:
                        Class_Output = "Please pick from the list!"
    }
    document.getElementById("Output").innerHTML = Class_Output;
}