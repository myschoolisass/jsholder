var menu = {
    "Minecraft": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/minecraft.js",
        "Mini browser-gaming thing": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/os.js",
        "Let there be Light": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/light.js",
        "3d-Page": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/3d.js",
        "Picture In Picture": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/ytpop.js",
        "Web Piano": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/piano.js",
        "History Flood": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/flood.js",
        "Spin": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/spin.js",
        "Spin (but slower)": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/slowspin.js",
        "Cloak": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/cloak.js",
        "Inspect Element": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/xray.js",
        "Rainbow Page": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/rainbow.js",
        "Edit Page": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/editor.js",
        "Ohio": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/funni.js",
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
