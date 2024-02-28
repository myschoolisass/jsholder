var menu = {
    "Proxy With Toggle": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/embedtoggler.js",
    "Proxy (alone)": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/embed.js",
    "Services": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/services.js",
    "Contact": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/contact.js"
};

// CSS styles
var cssStyles = `
#menu {
    position: fixed;
    top: 10px;
    left: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
}

.menu-item {
    cursor: pointer;
}
`;

// Function to add CSS styles to the document
function addStyles() {
    var styleElement = document.createElement('style');
    styleElement.textContent = cssStyles;
    document.head.appendChild(styleElement);
}

// Function to display the menu
function displayMenu() {
    var menuContainer = document.createElement('div');
    menuContainer.id = 'menu';
    document.body.appendChild(menuContainer); // Append menu container to the body

    Object.keys(menu).forEach(function(item) {
        var menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.textContent = item;
        menuItem.addEventListener('click', function() {
            handleMenuItemClick(item);
        });

        menuContainer.appendChild(menuItem);
    });
}

// Function to handle menu item clicks
function handleMenuItemClick(item) {
    console.log("You selected: " + item);
    var url = menu[item];
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
}

// Add CSS styles to the document
addStyles();

// Display the menu initially
displayMenu();
