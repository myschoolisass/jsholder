// Prompt the user to choose an option
var userChoice = prompt("Choose an option:\n1. Proxy with toggle\n2. Proxy (alone)\n3. Bookmarklet Executor\n4. Bookmarklet Library");

// Object to map user choices to URLs
var urlMap = {
    "1": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/embedtoggler.js',
    "2": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/embed.js',
    "3": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmark.js',
    "4": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/alertlibrary.js'
};

// Function to load and execute a script from a URL
function loadAndExecuteScript(url) {
    if (url) {
        fetch(url)
            .then(response => response.text())
            .then(scriptText => {
                eval(scriptText);
                var menuContainer = document.getElementById('menu');
                if (menuContainer) {
                    menuContainer.remove(); // Delete the entire menu
                }
            })
            .catch(error => {
                console.error("Error loading script:", error);
            });
    } else {
        console.log("No action associated with this menu item.");
    }
}

// Execute the script based on the user's choice
var scriptUrl = urlMap[userChoice];
if (scriptUrl) {
    loadAndExecuteScript(scriptUrl);
} else {
    alert("Error: Invalid choice. Please choose a valid option.");
}
