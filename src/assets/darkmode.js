let darkModeOn = localStorage.getItem('dark-mode-status') === "true" ? true : false;
const darkBtnIcon = document.getElementById("darkmode-btn-icon");

// If darkmode data is present
if (darkModeOn != null) {
  turnOnDarkmode(darkModeOn);
}
// Default to light mode
else {
  darkModeOn = false;
  localStorage.setItem('dark-mode-status', darkModeOn);
}

function toggleDarkMode() {
  darkModeOn = !darkModeOn;

  localStorage.setItem('dark-mode-status', darkModeOn);
  console.log("Storing darkmode as " + localStorage.getItem('dark-mode-status'));

  turnOnDarkmode(darkModeOn);
}

function turnOnDarkmode(darkmode){
  console.log(typeof(darkmode) + ": " + darkmode);
  if (darkmode) {
    console.log("turning on dark mode");
    darkBtnIcon.classList.remove('iconoir-compass');
    darkBtnIcon.classList.add('iconoir-compass-solid');

    document.body.classList.add('dark')
  }
  else {
    console.log("turning off dark mode");
    darkBtnIcon.classList.remove('iconoir-compass-solid');
    darkBtnIcon.classList.add('iconoir-compass');

    document.body.classList.remove('dark')
  }
  localStorage.setItem('dark-mode-status', darkmode);
}