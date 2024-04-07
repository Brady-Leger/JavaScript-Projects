function validateForm() {
    let x = document.forms["nameForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }