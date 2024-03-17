document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    showPopup();
});

document.getElementById("close").addEventListener("click", function() {
    hidePopup();
});

function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}
