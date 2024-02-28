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

// Create a button with the Bing favicon
const bingButton = document.createElement('button');
bingButton.style.backgroundImage = 'url(https://www.bing.com/favicon.ico)';
bingButton.style.backgroundSize = 'cover';
bingButton.style.width = '40px';
bingButton.style.height = '40px';
bingButton.style.border = 'none';
bingButton.style.borderRadius = '5px';
hotbar.appendChild(bingButton);

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
    tabContainer.style.backgroundColor = '#f1f1f1';
    tabContainer.style.overflow = 'hidden';
    windowDiv.appendChild(tabContainer);

    // Create an iframe container
    const iframeContainer = document.createElement('div');
    iframeContainer.style.height = 'calc(100% - 40px)'; // Adjust height to accommodate tabs
    iframeContainer.style.overflow = 'hidden';
    windowDiv.appendChild(iframeContainer);

    // Function to create a new tab
    function createTab(url) {
        // Create a tab button
        const tabButton = document.createElement('button');
        tabButton.textContent = url;
        tabButton.style.backgroundColor = 'inherit';
        tabButton.style.border = 'none';
        tabButton.style.outline = 'none';
        tabButton.style.cursor = 'pointer';
        tabButton.style.padding = '10px';
        tabButton.style.marginRight = '2px';
        tabButton.addEventListener('click', () => {
            iframe.src = url;
        });
        tabContainer.appendChild(tabButton);

        // Create an iframe
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframeContainer.appendChild(iframe);
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
    resizeHandle.style.width = '20px'; // Increased size
    resizeHandle.style.height = '20px'; // Increased size
    resizeHandle.style.backgroundColor = 'gray';
    resizeHandle.style.position = 'absolute';
    resizeHandle.style.bottom = '0';
    resizeHandle.style.right = '0';
    resizeHandle.style.cursor = 'nwse-resize';
    windowDiv.appendChild(resizeHandle);

    // Make the window draggable
    let offsetX, offsetY;
    windowDiv.addEventListener('mousedown', (event) => {
        if (event.target === resizeHandle || event.target.closest('.tab-container')) return; // Prevent dragging when resizing or clicking on tabs
        offsetX = event.clientX - windowDiv.getBoundingClientRect().left;
        offsetY = event.clientY - windowDiv.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        windowDiv.style.cursor = 'move';
    });

    function onMouseMove(event) {
        windowDiv.style.left = event.clientX - offsetX + 'px';
        windowDiv.style.top = event.clientY - offsetY + 'px';
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
        const width = event.clientX - windowDiv.getBoundingClientRect().left;
        const height = event.clientY - windowDiv.getBoundingClientRect().top;
        windowDiv.style.width = width + 'px';
        windowDiv.style.height = height + 'px';
    }

    function onResizeUp() {
        document.removeEventListener('mousemove', onResizeMove);
        document.removeEventListener('mouseup', onResizeUp);
    }

    document.body.appendChild(windowDiv);

    // Create initial tabs
    createTab('https://www.bing.com');
}

// Attach event listener to the Bing button
bingButton.addEventListener('click', createWindowWithTabs);
