// Style the "create window" button
    const button = document.createElement('button');
button.style.backgroundColor = '#4CAF50'; // Green background
button.style.color = 'white'; // White text
button.style.padding = '10px 20px'; // Padding
button.style.border = 'none'; // No border
button.style.borderRadius = '5px'; // Rounded corners
button.style.fontSize = '16px'; // Font size

// Create a hotbar
const hotbar = document.createElement('div');
hotbar.style.position = 'fixed';
hotbar.style.bottom = '60px';
hotbar.style.right = '20px';
document.body.appendChild(hotbar);

// Function to create a window with tabs
function createWindowWithTabs() {
    const windowDiv = document.createElement('div');
    windowDiv.style.width = '400px';
    windowDiv.style.height = '300px';
    windowDiv.style.backgroundColor = 'white';
    windowDiv.style.border = '1px solid black';
    windowDiv.style.position = 'absolute';
    windowDiv.style.top = '50px';
    windowDiv.style.left = '50px';
    windowDiv.style.zIndex = '1000';
    windowDiv.style.overflow = 'hidden';

    // Create a tab container
    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container');
    tabContainer.style.backgroundColor = '#f1f1f1';
    tabContainer.style.overflow = 'hidden';
    tabContainer.style.height = '40px'; // Set height for the tab container
    tabContainer.style.display = 'flex'; // Use flexbox to align tabs
    tabContainer.style.alignItems = 'center'; // Vertically center the tabs
    windowDiv.appendChild(tabContainer);

    // Create an iframe container
    const iframeContainer = document.createElement('div');
    iframeContainer.style.height = 'calc(100% - 40px)'; // Adjust height to accommodate tabs
    iframeContainer.style.overflow = 'hidden';
    windowDiv.appendChild(iframeContainer);

    let activeTab = null; // Track the active tab

    // Function to create a new tab
    function createTab(url) {
        const tabId = 'tab-' + Math.random().toString(36).substr(2, 9); // Generate a unique tab ID

        // Create a tab button
        const tabButton = document.createElement('button');
        tabButton.id = tabId;
        tabButton.textContent = url;
        tabButton.style.backgroundColor = 'inherit';
        tabButton.style.border = 'none';
        tabButton.style.outline = 'none';
        tabButton.style.cursor = 'pointer';
        tabButton.style.padding = '5px 10px'; // Adjust padding for better appearance
        tabButton.style.marginRight = '2px';
        tabContainer.appendChild(tabButton);

        // Create an iframe
        const iframe = document.createElement('iframe');
        iframe.id = 'iframe-' + tabId;
        iframe.src = url;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.display = 'none'; // Initially hide the iframe
        iframeContainer.appendChild(iframe);

        // Show the iframe when its tab is clicked
        tabButton.addEventListener('click', () => {
            // Hide all iframes
            iframeContainer.childNodes.forEach(child => {
                child.style.display = 'none';
            });
            // Show the clicked tab's iframe
            iframe.style.display = 'block';

            // Update active tab styling
            if (activeTab) {
                activeTab.style.backgroundColor = 'inherit';
            }
            tabButton.style.backgroundColor = '#ddd';
            activeTab = tabButton;
        });

        // Show the first tab's iframe by default
        if (iframeContainer.childNodes.length === 1) {
            iframe.style.display = 'block';
            tabButton.style.backgroundColor = '#ddd';
            activeTab = tabButton;
        }
    }

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.style.position = 'absolute';
    deleteButton.style.top = '0';
    deleteButton.style.right = '0';
    deleteButton.style.zIndex = '1001';
    deleteButton.addEventListener('click', () => {
        document.body.removeChild(windowDiv);
    });
    windowDiv.appendChild(deleteButton);

    // Add a resize handle
    const resizeHandle = document.createElement('div');
    resizeHandle.style.width = '20px';
    resizeHandle.style.height = '20px';
    resizeHandle.style.backgroundColor = 'gray';
    resizeHandle.style.position = 'absolute';
    resizeHandle.style.bottom = '0';
    resizeHandle.style.right = '0';
    resizeHandle.style.cursor = 'nwse-resize';
    windowDiv.appendChild(resizeHandle);

    // Make the window draggable
    let offsetX, offsetY;
    tabContainer.addEventListener('mousedown', (event) => {
        if (event.target === resizeHandle) return; // Prevent dragging when resizing
        offsetX = event.clientX - windowDiv.getBoundingClientRect().left;
        offsetY = event.clientY - windowDiv.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        windowDiv.style.cursor = 'move';
    });

    function onMouseMove(event) {
        const newX = event.clientX - offsetX;
        const newY = event.clientY - offsetY;
        // Limit the window's position to prevent it from going off-screen
        windowDiv.style.left = Math.min(Math.max(newX, 0), window.innerWidth - windowDiv.offsetWidth) + 'px';
        windowDiv.style.top = Math.min(Math.max(newY, 0), window.innerHeight - windowDiv.offsetHeight) + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        windowDiv.style.cursor = 'default';
    }

    // Make the window resizable
    resizeHandle.addEventListener('mousedown', (event) => {
        event.preventDefault(); // Prevent default behavior to allow resizing
        document.addEventListener('mousemove', onResizeMove);
        document.addEventListener('mouseup', onResizeUp);
    });

    function onResizeMove(event) {
        const width = Math.max(event.clientX - windowDiv.getBoundingClientRect().left, 200); // Minimum width
        const height = Math.max(event.clientY - windowDiv.getBoundingClientRect().top, 150); // Minimum height
        windowDiv.style.width = width + 'px';
        windowDiv.style.height = height + 'px';
    }

    function onResizeUp() {
        document.removeEventListener('mousemove', onResizeMove);
        document.removeEventListener('mouseup', onResizeUp);
    }

    document.body.appendChild(windowDiv);

    // Create initial tab
    createTab('https://www.bing.com');

    // Create a button to add a new tab within the window
    const addTabButton = document.createElement('button');
    addTabButton.textContent = '+';
    addTabButton.style.padding = '5px 10px';
    addTabButton.style.position = 'absolute';
    addTabButton.style.right = '0';
    addTabButton.style.top = '0';
    addTabButton.addEventListener('click', () => {
        createTab('https://www.bing.com'); // Always open Bing.com in the new tab
    });
    windowDiv.appendChild(addTabButton); // Add the button to the windowDiv instead of tabContainer

    // Return the function to create new tabs
    return createTab;
}

// Attach event listener to the Bing button
const createTab = createWindowWithTabs();

// Create a button to add a new window with tabs
const newWindowButton = document.createElement('button');
newWindowButton.textContent = 'New Window';
newWindowButton.style.marginLeft = '10px';
newWindowButton.style.backgroundColor = '#4CAF50'; // Green background
newWindowButton.style.color = 'white'; // White text
newWindowButton.style.padding = '10px 20px'; // Padding
newWindowButton.style.border = 'none'; // No border
newWindowButton.style.borderRadius = '5px'; // Rounded corners
newWindowButton.style.fontSize = '16px'; // Font size
newWindowButton.style.backgroundImage = 'url(https://www.bing.com/favicon.ico)'; // Bing favicon
newWindowButton.style.backgroundRepeat = 'no-repeat';
newWindowButton.style.backgroundPosition = '10px center';
newWindowButton.style.backgroundSize = '20px';
newWindowButton.style.textAlign = 'right';
newWindowButton.style.paddingLeft = '40px'; // Adjust padding to accommodate the favicon
newWindowButton.addEventListener('click', () => {
    createWindowWithTabs(); // Create a new window with tabs
});
hotbar.appendChild(newWindowButton);

// Function to create a draggable and resizable window
// Function to create a draggable and resizable window
function createDraggableWindow(url, imageUrl) {
    const windowDiv = document.createElement('div');
    windowDiv.style.width = '400px';
    windowDiv.style.height = '300px';
    windowDiv.style.backgroundColor = 'white';
    windowDiv.style.border = '1px solid black';
    windowDiv.style.position = 'absolute';
    windowDiv.style.top = '100px';
    windowDiv.style.left = '100px';
    windowDiv.style.zIndex = '1000';
    windowDiv.style.overflow = 'hidden';
    windowDiv.style.paddingTop = '20px'; // Increase padding for the dragging bar

    // Create a dragging bar
    const draggingBar = document.createElement('div');
    draggingBar.style.width = '100%';
    draggingBar.style.height = '20px'; // Height of the dragging bar
    draggingBar.style.backgroundColor = '#f1f1f1'; // Background color of the dragging bar
    draggingBar.style.cursor = 'move';
    windowDiv.appendChild(draggingBar);

    // Create an iframe
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100% - 20px)'; // Adjust height to accommodate the dragging bar
    windowDiv.appendChild(iframe);

    // Add a resize handle
    const resizeHandle = document.createElement('div');
    resizeHandle.style.width = '20px';
    resizeHandle.style.height = '20px';
    resizeHandle.style.backgroundColor = 'gray';
    resizeHandle.style.position = 'absolute';
    resizeHandle.style.bottom = '0';
    resizeHandle.style.right = '0';
    resizeHandle.style.cursor = 'nwse-resize';
    windowDiv.appendChild(resizeHandle);

    // Make the window draggable
    let offsetX, offsetY;
    draggingBar.addEventListener('mousedown', (event) => {
        offsetX = event.clientX - windowDiv.getBoundingClientRect().left;
        offsetY = event.clientY - windowDiv.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(event) {
        const newX = event.clientX - offsetX;
        const newY = event.clientY - offsetY;
        // Limit the window's position to prevent it from going off-screen
        windowDiv.style.left = Math.min(Math.max(newX, 0), window.innerWidth - windowDiv.offsetWidth) + 'px';
        windowDiv.style.top = Math.min(Math.max(newY, 0), window.innerHeight - windowDiv.offsetHeight) + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    // Make the window resizable
    resizeHandle.addEventListener('mousedown', (event) => {
        event.preventDefault(); // Prevent default behavior to allow resizing
        document.addEventListener('mousemove', onResizeMove);
        document.addEventListener('mouseup', onResizeUp);
    });

    function onResizeMove(event) {
        const width = Math.max(event.clientX - windowDiv.getBoundingClientRect().left, 200); // Minimum width
        const height = Math.max(event.clientY - windowDiv.getBoundingClientRect().top, 150); // Minimum height
        windowDiv.style.width = width + 'px';
        windowDiv.style.height = height + 'px';
    }

    function onResizeUp() {
        document.removeEventListener('mousemove', onResizeMove);
        document.removeEventListener('mouseup', onResizeUp);
    }

    document.body.appendChild(windowDiv);
}


// Create a button to add a new window without tabs
const newWindowButtonNoTabs = document.createElement('button');
newWindowButtonNoTabs.textContent = 'New Window (No Tabs)';
newWindowButtonNoTabs.style.marginLeft = '10px';
newWindowButtonNoTabs.style.backgroundColor = '#4CAF50'; // Green background
newWindowButtonNoTabs.style.color = 'white'; // White text
newWindowButtonNoTabs.style.padding = '10px 20px'; // Padding
newWindowButtonNoTabs.style.border = 'none'; // No border
newWindowButtonNoTabs.style.borderRadius = '5px'; // Rounded corners
newWindowButtonNoTabs.style.fontSize = '16px'; // Font size
newWindowButtonNoTabs.style.backgroundImage = 'url(https://lightspeedfilteragent.github.io/images/download.jpg)'; // Custom image
newWindowButtonNoTabs.style.backgroundRepeat = 'no-repeat';
newWindowButtonNoTabs.style.backgroundPosition = '10px center';
newWindowButtonNoTabs.style.backgroundSize = '20px';
newWindowButtonNoTabs.style.textAlign = 'right';
newWindowButtonNoTabs.style.paddingLeft = '40px'; // Adjust padding to accommodate the image
newWindowButtonNoTabs.addEventListener('click', () => {
    createDraggableWindow('https://myschoolisass.github.io/games.html', 'https://lightspeedfilteragent.github.io/images/download.jpg'); // Create a new window without tabs
});
hotbar.appendChild(newWindowButtonNoTabs);
