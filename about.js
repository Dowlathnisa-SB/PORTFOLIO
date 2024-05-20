document.getElementById("downloadBtn").addEventListener("click", function() {
    var link = document.createElement("a");
    link.href = "file:///C:/Users/dowla/Downloads/DOWLATHNISA%20SB%20RESUME.pdf"; // Replace with your PDF file path
    link.download = "resume.pdf"; // The file name to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
