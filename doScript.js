function buttonPress(){
    name = document.getElementById("input_name").value;
    document.getElementById("name_label").innerHTML = "Hi " + name + "!"
    document.getElementById("input_name").innerHTML = "";
}
