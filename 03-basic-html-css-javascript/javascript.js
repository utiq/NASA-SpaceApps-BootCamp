function inputName() {
  var name = prompt("What's your name?");
  if (name != null) {
    document.getElementById("welcome").innerHTML = "Hi " + name + ". I'm glad you came to this event"
  }
}
