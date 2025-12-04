const toggleButton = document.getElementById("toggleButton");
const toggleButtonBall = document.getElementById("ball");
// This code Only gets ran once and then delete it
// localStorage.setItem("theme", document.body.classList);

function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", document.body.classList);
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", document.body.classList);
  }
}

function render() {
  document.body.classList.add(localStorage.getItem("theme"));

  if (document.body.classList.contains("dark")) {
    toggleButtonBall.classList.add("moon");
  } else if (document.body.classList.contains("light")) {
    toggleButtonBall.classList.add("sun");
  }
}
render();
