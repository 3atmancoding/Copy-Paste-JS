function copyText(e) {
  window
    .getSelection()
    .selectAllChildren(document.getElementById("text-field"));
  document.execCommand("copy");
  var icon = document.querySelector(".copyicon");
  if (icon.classList.contains("fa-copy")) {
    icon.classList.remove("fa-copy");
    icon.classList.add("fa-check-circle");
    icon.classList.add("iconTrans");
    setTimeout(function () {
      icon.classList.add("fa-copy");
      icon.classList.remove("fa-check-circle");
    }, 2000);
  }
}
