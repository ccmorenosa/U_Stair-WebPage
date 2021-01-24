if ( window.navigator.platform.match("Linux") ) {

  console.log(window.navigator.platform.match("Linux"));
  document.getElementById("Linux-A").classList.remove("d-none");
  document.getElementById("Linux-B").classList.add("d-none");

} else if (window.navigator.platform.match("Win")) {

  document.getElementById("Windows-A").classList.remove("d-none");
  document.getElementById("Windows-B").classList.add("d-none");

} else if (window.navigator.platform.match("Mac")) {

  document.getElementById("Mac-A").classList.remove("d-none");
  document.getElementById("Mac-B").classList.add("d-none");

} else {

  document.getElementById("Linux-A").classList.remove("d-none");
  document.getElementById("Windows-A").classList.remove("d-none");
  document.getElementById("second-download").classList.add("d-none");

}
