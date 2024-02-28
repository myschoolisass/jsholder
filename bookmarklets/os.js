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

// Function to create a window with an iframe
function createWindowWithIframe(url) {
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

    // Create an iframe
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    windowDiv.appendChild(iframe);

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
    resizeHandle.style.width = '10px';
    resizeHandle.style.height = '10px';
    resizeHandle.style.backgroundColor = 'gray';
    resizeHandle.style.position = 'absolute';
    resizeHandle.style.bottom = '0';
    resizeHandle.style.right = '0';
    resizeHandle.style.cursor = 'nwse-resize';
    windowDiv.appendChild(resizeHandle);

    // Make the window draggable
    let offsetX, offsetY;
    windowDiv.addEventListener('mousedown', (event) => {
        if (event.target === resizeHandle) return; // Prevent dragging when resizing
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
}

// Attach event listener to the Bing button
bingButton.addEventListener('click', () => createWindowWithIframe('https://www.bing.com'));

