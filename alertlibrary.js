// Prompt the user to choose an option
var userChoice = prompt("Choose an option:\n1. Minecraft\n2. Mini browser-gaming thing\n3. Let there be Light\n4. 3d-Page\n5. Picture In Picture \n6. Web Piano\n7. History Flood\n8. Spin");

// Execute a specific JavaScript eval based on the user's choice
switch (userChoice) {
    case "1":
        var url = 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/minecraft.js'
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
        var url = 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/os.js'
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
        var url = 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/light.js'
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
    case "5":
        var url = 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/ytpop.js';
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
    case "6":
            var url = 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/piano.js';
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
                var url = 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/3d.js';
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
    case "7":
                    var url = 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/spin.js';
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
