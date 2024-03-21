const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle iframe";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.zIndex = "9999";
toggleButton.style.backgroundColor = "#4CAF50"; // Green background
toggleButton.style.color = "white"; // White text
toggleButton.style.padding = "10px 20px"; // Padding
toggleButton.style.border = "none"; // No border
toggleButton.style.borderRadius = "5px"; // Rounded corners
toggleButton.style.cursor = "pointer"; // Pointer cursor on hover

const myIframe = document.createElement("iframe");
myIframe.src = "https://myschooliass.github.io/20xx/test2.html";
myIframe.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 9998;";

document.body.appendChild(toggleButton);
document.body.appendChild(myIframe);

toggleButton.addEventListener("click", function() {
    myIframe.style.display = myIframe.style.display === "none" ? "block" : "none";
});
