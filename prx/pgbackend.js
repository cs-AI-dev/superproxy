console.log("Loading SPHINX backend algorithms ...");

function maximize(id) {
  document.getElementById(id).style.display = "block";
  document.getElemendById(id).style.width = "100%";
  document.getElementById(id).style.height = "100%";
}

function minimize(id) {
  document.getElementById(id).style.display = "none";
  document.getElementById(id).style.width = "0%";
  document.getElementById(id).style.height = "0%";
}

function loadSiteProxy() {
  // Switch iframe SRC to the targeted website
  minimize("webproxy_entry");
  maximize("webproxy_container");
  document.getElementById("webproxy").src = document.getElementById("wp_url_input").value;
}

console.log("Loading complete.");
