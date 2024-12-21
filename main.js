document.getElementById("download").addEventListener("click", function () {
  // Create an anchor element
  var downloadLink = document.createElement("a");
  downloadLink.href = "Resume.pdf";
  downloadLink.download = "Resume.pdf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});
