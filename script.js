var checked = false;
function clicked() {
  if (checked === false) {
    document.getElementById("department").disabled = false;
    checked = true;
  }
  const rads = document.querySelectorAll('input[name="course"]');
  const dep = document.querySelectorAll('select[name="department"]');
  const bes = document.getElementsByClassName("bes");
  const btechs = document.getElementsByClassName("btechs");
  console.log(bes);
  for (i in rads) {
    if (rads[i].checked) {
      selected = rads[i].value;
      if (selected == "BE") {
        for (j in bes) {
          bes[j].removeAttribute("hidden");
        }
      } else if (selected == "BTech") {
        for (j in btechs) {
          btechs[j].removeAttribute("hidden");
        }
      }
    }
  }
}
