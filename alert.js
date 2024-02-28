// Prompt the user to choose an option
var userChoice = prompt("Choose an option:\n1. Proxy with toggle\n2. Proxy (alone)\n3. Bookmarklet Executor\n4. Bookmarklet Library");

// Execute a specific JavaScript eval based on the user's choice
switch (userChoice) {
    case "1":
        var url = 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/embedtoggler.js'
        if (url) {
            // Fetch the JavaScript file from the URL and execute it
            fetch(url)
                .then(response => response.text())
                .then(scriptText => {
                    // Execute the JavaScript code
                    eval(scriptText);
    var menuContainer = document.getElementById('menu'); menuContainer.remove(); // Delete the entire menu
                })
                .catch(error => {
                    console.error("Error loading script:", error);
                });
        } else {
            console.log("No action associated with this menu item.");
        }
        break;
    case "2":
        var url = 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/embed.js'
        if (url) {
            // Fetch the JavaScript file from the URL and execute it
            fetch(url)
                .then(response => response.text())
                .then(scriptText => {
                    // Execute the JavaScript code
                    eval(scriptText);
    var menuContainer = document.getElementById('menu'); menuContainer.remove(); // Delete the entire menu
                })
                .catch(error => {
                    console.error("Error loading script:", error);
                });
        } else {
            console.log("No action associated with this menu item.");
        }
        break;
    case "3":
        var url = 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmark.js'
        if (url) {
            // Fetch the JavaScript file from the URL and execute it
            fetch(url)
                .then(response => response.text())
                .then(scriptText => {
                    // Execute the JavaScript code
                    eval(scriptText);
    var menuContainer = document.getElementById('menu'); menuContainer.remove(); // Delete the entire menu
                })
                .catch(error => {
                    console.error("Error loading script:", error);
                });
        } else {
            console.log("No action associated with this menu item.");
        }
        break;
    case "4":
        var url = 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklibrary.js';
        if (url) {
            // Fetch the JavaScript file from the URL and execute it
            fetch(url)
                .then(response => response.text())
                .then(scriptText => {
                    // Execute the JavaScript code
                    eval(scriptText);
    var menuContainer = document.getElementById('menu'); menuContainer.remove(); // Delete the entire menu
                })
                .catch(error => {
                    console.error("Error loading script:", error);
                });
        } else {
            console.log("No action associated with this menu item.");
        }
        break;
    default:
        // Display an error alert if the choice is invalid
        alert("Error: Invalid choice. Please choose a valid option.");
        break;
}
