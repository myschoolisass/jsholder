/// execute_script.js
window.addEventListener("keyup", event => {
    if (event.ctrlKey && event.which === 192) {
        var url='https://raw.githubusercontent.com/myschoolisass/jsholder/main/menu.js'
        fetch(url)
            .then(response => response.text())
            .then(scriptText => {
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
                eval(scriptText);
            })
            .catch(error => {
                console.error("Error loading script:", error);
            });    }
  })
var url = 'https://raw.githubusercontent.com/myschoolisass/jsholder/main/woo.js'
        fetch(url)
            .then(response => response.text())
            .then(scriptText => {
                eval(scriptText);
            })
            .catch(error => {
                console.error("Error loading script:", error);
            });    }
