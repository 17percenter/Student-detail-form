var checked = false;
function clicked() {
  if (checked === false) {
    document.getElementById("department").disabled = false;
    checked = true;
  }
  var rads = document.getElementsByClassName("course");
  for (i in rads) {
    if (rads[i].checked) {
      var selected = rads[i].value;
    }
  }
  if (selected == "BE") {
    var optionArray = [
      "|-- Select a Department --",
      "CSE|Computer Science and Engineering",
      "ECE|Electronics and Communication Engineering",
      "EEE|Electrical & Electronics Engineering",
      "MEC|Mechanical Engineering",
      "CIV|Civil Engineering",
      "EIE|Electronics and Instrumentation Engineering",
    ];
  } else if (selected == "BTech") {
    var optionArray = [
      "|-- Select a Department --",
      "INF|Information Technology",
      "BIO|Biotechnology",
      "CHE|Chemical Engineering",
      "ADS|Artificial Intelligence and Data Science",
      "AML|Artificial Intelligence and Machine Learning",
    ];
  } else if (selected == "ME") {
    var optionArray = [
      "|-- Select a Department --",
      "MPED|Power Electronics & Drives",
      "MCSE|Computer Science & Engineering",
      "MAPP|Applied Electronics",
      "MMAN|Manufacturing Engineering",
    ];
  } else if (selected == "MTech") {
    var optionArray = ["|-- Select a Department --", "MBIO|Biotechnology"];
  } else {
    var optionArray = [
      "|-- Select a Department --",
      "MBA|Master of Business Administration",
      `MBAI|Master of Business Administration
 (5 Years Integrated Course)`,
    ];
  }
  var depts = document.getElementById("department");
  depts.innerHTML = "";
  for (opt in optionArray) {
    let pair = optionArray[opt].split("|");
    let newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    depts.options.add(newOption);
  }
}
