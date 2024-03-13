// Prompt the user to choose an option
var userChoice = prompt("Choose an option:\n1. Minecraft\n2. Mini browser-gaming thing\n3. Let there be Light\n4. 3d-Page\n5. Picture In Picture \n6. Web Piano\n7. History Flood\n8. Spin\n9. Spin (but slower)\n10. Tab Cloak\n11. Inspect Element\n12. Rainbow Page\n13. Rainbow Page 2\n14. Edit Page\n15. ohio\n16. Make Image Fly\n17. High Contrast\n18. Blur Page\n19. funni page");
var urlMap = {
    "1": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/minecraft.js',
    "2": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/os.js',
    "3": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/light.js',
    "4": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/3d.js',
    "5": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/ytpop.js',
    "6": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/piano.js',
    "7": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/flood.js',
    "8": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/spin.js',
    "9": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/slowspin.js',
    "10": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/cloak.js',
    "11": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/xray.js',
    "12": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/rainbow.js',
    "13": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/rainbow2.js",
    "14": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/editor.js',
    "15": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/funni.js',
    "16": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/image.js',
    "17": 'https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/invert.js',
    "18": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/blur.js",
    "19": "https://raw.githubusercontent.com/bro-my-username-got-blocked/jsholder/main/bookmarklets/funnysite.js",
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
