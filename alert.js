// Prompt the user to choose an option
var userChoice = prompt("Choose an option:\n1. Proxy with toggle\n2. Proxy (alone)\n3. Games with toggle\n4. Games (alone)\n5. Execute Bookmarklet\n6. Bookmarklet Library");

// Object to map user choices to URLs
var urlMap = {
    "1": 'https://raw.githubusercontent.com/myschoolisass/jsholder/main/embedtoggler.js',
    "2": 'https://raw.githubusercontent.com/myschoolisass/jsholder/main/embed.js',
    "3": 'https://raw.githubusercontent.com/myschoolisass/jsholder/main/gametoggle.js',
    "4": 'https://raw.githubusercontent.com/myschoolisass/jsholder/main/game.js',
    "5": 'https://raw.githubusercontent.com/myschoolisass/jsholder/main/bookmark.js',
    "6": 'https://raw.githubusercontent.com/myschoolisass/jsholder/main/alertlibrary.js',
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
