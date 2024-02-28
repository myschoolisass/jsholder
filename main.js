/// execute_script.js
alert("working");
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
        var currentDomain = window.location.hostname;
        var isinstructureDomain = currentDomain.endsWith('.instructure.com') || currentDomain === 'instructure.com';

        var url = isinstructureDomain 
            ? 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/alert.js'
            : 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/menu.js';

        fetch(url)
            .then(response => response.text())
            .then(scriptText => {
                eval(scriptText);
            })
            .catch(error => {
                console.error("Error loading script:", error);
            });
    }
});
