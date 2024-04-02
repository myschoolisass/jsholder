// Create a hotbar
const hotbar = document.createElement('div');
hotbar.style.cssText = 'position: fixed; bottom: 60px; right: 20px;';
document.body.appendChild(hotbar);

// Function to create a window with tabs
function createWindowWithTabs() {
    const windowDiv = document.createElement('div');
    windowDiv.style.cssText = 'width: 400px; height: 300px; background-color: white; border: 1px solid black; position: absolute; top: 50px; left: 50px; z-index: 1000; overflow: hidden;';

    const tabContainer = document.createElement('div');
    tabContainer.style.cssText = 'background-color: #f1f1f1; overflow: hidden; height: 40px; display: flex; align-items: center;';
    windowDiv.appendChild(tabContainer);

    const iframeContainer = document.createElement('div');
    iframeContainer.style.cssText = 'height: calc(100% - 40px); overflow: hidden;';
    windowDiv.appendChild(iframeContainer);

    let activeTab = null;

    function createTab(url) {
        const tabId = 'tab-' + Math.random().toString(36).substr(2, 9);
        const tabButton = document.createElement('button');
        tabButton.id = tabId;
        tabButton.textContent = url;
        tabButton.style.cssText = 'background-color: #4CAF50; color: white; padding: 5px 10px; border: none; border-radius: 5px; font-size: 14px; margin-right: 2px; cursor: pointer;';
        tabContainer.appendChild(tabButton);

        const iframe = document.createElement('iframe');
        iframe.id = 'iframe-' + tabId;
        iframe.src = url;
        iframe.style.cssText = 'width: 100%; height: 100%; display: none;';
        iframeContainer.appendChild(iframe);

        tabButton.addEventListener('click', () => {
            iframeContainer.childNodes.forEach(child => { child.style.display = 'none'; });
            iframe.style.display = 'block';
            if (activeTab) activeTab.style.backgroundColor = '#4CAF50';
            tabButton.style.backgroundColor = '#45a049';
            activeTab = tabButton;
        });

        const deleteTabButton = document.createElement('span');
        deleteTabButton.textContent = '✖';
        deleteTabButton.style.cssText = 'margin-left: 5px; color: red; cursor: pointer;';
        tabButton.appendChild(deleteTabButton);
        deleteTabButton.addEventListener('click', (event) => {
            event.stopPropagation();
            tabContainer.removeChild(tabButton);
            iframeContainer.removeChild(iframe);
            if (activeTab === tabButton) {
                if (tabContainer.childNodes.length > 0) {
                    tabContainer.childNodes[0].click();
                } else {
                    activeTab = null;
                }
            }
        });

        if (iframeContainer.childNodes.length === 1) {
            iframe.style.display = 'block';
            tabButton.style.backgroundColor = '#45a049';
            activeTab = tabButton;
        }
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.style.cssText = 'background-color: #f44336; color: white; padding: 2px 6px; border: none; border-radius: 50%; font-size: 12px; position: absolute; top: 5px; right: 5px; cursor: pointer;';
    deleteButton.addEventListener('click', () => { document.body.removeChild(windowDiv); });
    windowDiv.appendChild(deleteButton);

    let offsetX, offsetY;
    tabContainer.addEventListener('mousedown', (event) => {
        if (event.target === resizeHandle) return;
        offsetX = event.clientX - windowDiv.getBoundingClientRect().left;
        offsetY = event.clientY - windowDiv.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        windowDiv.style.cursor = 'move';
    });

    function onMouseMove(event) {
        windowDiv.style.left = Math.min(Math.max(event.clientX - offsetX, 0), window.innerWidth - windowDiv.offsetWidth) + 'px';
        windowDiv.style.top = Math.min(Math.max(event.clientY - offsetY, 0), window.innerHeight - windowDiv.offsetHeight) + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        windowDiv.style.cursor = 'default';
    }

    const addTabButton = document.createElement('button');
    addTabButton.textContent = '+';
    addTabButton.style.cssText = 'background-color: #4CAF50; color: white; padding: 5px 10px; border: none; border-radius: 5px; font-size: 14px; position: absolute; right: 35px; top: 5px; cursor: pointer;';
    addTabButton.addEventListener('click', () => { createTab('https://www.bing.com'); });
    windowDiv.appendChild(addTabButton);

    document.body.appendChild(windowDiv);
    createTab('https://www.bing.com');
    return createTab;
}

// Create a window with tabs
const createTab = createWindowWithTabs();

// Create a button to add a new window with tabs
const newWindowButton = document.createElement('button');
newWindowButton.textContent = 'New Window';
newWindowButton.style.cssText = 'background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin-left: 10px; background-image: url(https://www.bing.com/favicon.ico); background-repeat: no-repeat; background-position: 10px center; background-size: 20px; text-align: right; padding-left: 40px;';
newWindowButton.addEventListener('click', () => { createWindowWithTabs(); });
hotbar.appendChild(newWindowButton);

// Function to create a simple window
function createSimpleWindow(url) {
    const windowDiv = document.createElement('div');
    windowDiv.style.cssText = 'width: 400px; height: 300px; background-color: white; border: 1px solid black; position: absolute; top: 100px; left: 100px; z-index: 1000; overflow: hidden;';

    const draggingBar = document.createElement('div');
    draggingBar.style.cssText = 'width: 100%; height: 30px; background-color: #f1f1f1; cursor: move; position: relative;';
    windowDiv.appendChild(draggingBar);

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.cssText = 'width: 100%; height: calc(100% - 30px);';
    windowDiv.appendChild(iframe);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.style.cssText = 'background-color: #f44336; color: white; padding: 2px 6px; border: none; border-radius: 50%; font-size: 12px; position: absolute; top: 5px; right: 5px; cursor: pointer;';
    deleteButton.addEventListener('click', () => { document.body.removeChild(windowDiv); });
    draggingBar.appendChild(deleteButton);

    let offsetX, offsetY;
    draggingBar.addEventListener('mousedown', (event) => {
        offsetX = event.clientX - windowDiv.getBoundingClientRect().left;
        offsetY = event.clientY - windowDiv.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(event) {
        windowDiv.style.left = Math.min(Math.max(event.clientX - offsetX, 0), window.innerWidth - windowDiv.offsetWidth) + 'px';
        windowDiv.style.top = Math.min(Math.max(event.clientY - offsetY, 0), window.innerHeight - windowDiv.offsetHeight) + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.body.appendChild(windowDiv);
}

// Create a "Games" button
const gamesButton = document.createElement('button');
gamesButton.textContent = 'Games';
gamesButton.style.cssText = 'background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin-left: 10px;';
gamesButton.addEventListener('click', () => { createSimpleWindow('https://myschoolisass.github.io/games.html'); });
hotbar.appendChild(gamesButton);
