function changeTheme(event) {
  let footer = document.getElementsByClassName("footer");

  if (event.target.checked) {
    document.body.classList.add("dark-theme");
    footer.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
    footer.classList.remove("dark-theme");
  }
}
