/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
        // Check if the current domain is instructure.com or its subdomains
        var currentDomain = window.location.hostname;
        var isinstructureDomain = currentDomain.endsWith('.instructure.com') || currentDomain === 'instructure.com';

        // Set the URL based on the domain check
        var url = isinstructureDomain 
            ? 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/alert.js'
            : 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/menu.js';

        fetch(url)
            .then(response => response.text())
            .then(scriptText => {
                // Execute the JavaScript code
                eval(scriptText);
            })
            .catch(error => {
                console.error("Error loading script:", error);
            });
    }
});
