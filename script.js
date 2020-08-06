var themeDots = document.getElementsByClassName("theme-dot");

var currentTheme = localStorage.getItem("theme");

if (currentTheme === "light" || !currentTheme) {
  setTheme("light");
} else {
  setTheme(currentTheme);
}

for (var i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", function () {
    var mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(theme) {
  if (theme === "light") {
    document.getElementById("theme-style").setAttribute("href", "default.css");
  } else {
    document.getElementById("theme-style").setAttribute("href", theme + ".css");
  }

  localStorage.setItem("theme", theme);
}
