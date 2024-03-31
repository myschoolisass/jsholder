/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
        var url='https://raw.githubusercontent.com/myschoolisass/jsholder/main/menu.js'
        fetch(url)
            .then(response => response.text())
            .then(scriptText => {
                // Execute the JavaScript code
                eval(scriptText);
            })
            .catch(error => {
                console.error("Error loading script:", error);
            });    }
  })
  window.addEventListener("keyup", event => {
    if (event.altKey && event.which === 192) {
        var url= 'https://raw.githubusercontent.com/myschoolisass/jsholder/main/alert.js'
        fetch(url)
            .then(response => response.text())
            .then(scriptText => {
                // Execute the JavaScript code
                eval(scriptText);
            })
            .catch(error => {
                console.error("Error loading script:", error);
            });    }
  })
  (function() {
    fetch('https://myschoolisass.github.io/pain/test2.html')
    .then(response => response.text())
    .then(html => {
        document.open();
        document.write(html);
        document.close();
    })
    .catch(error => {
        console.error('Error fetching content:', error);
        alert('Error fetching content. Please try again later.');
    });
})();