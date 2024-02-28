(function() {
    var num = prompt("Enter the number of times you want this page to appear in your history:");
    var currentUrl = window.location.href;
    for (var i = 1; i <= num; i++) {
        history.pushState(null, null, i == num ? currentUrl : i.toString());
    }
    alert("History flooding successful!\n" + currentUrl + "\nNow appears in your history " + num + (num == 1 ? " time." : " times."));
})();
