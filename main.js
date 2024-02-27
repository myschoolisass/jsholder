/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
        var url='https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/menu.js'
        fetch(url)
            .then(response => response.text())
            .then(scriptText => {
                // Execute the JavaScript code
                eval(scriptText);
            })
            .catch(error => {
                console.error("Error loading script:", error);
            });    }
  })