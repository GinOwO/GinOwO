function randomizeTiming() {
    var items = document.querySelectorAll("animated-text");
    items.forEach(function (item) {
        var randomDelay = Math.random() * 10;
        item.style.animationDelay = "-" + randomDelay + "s";
    });
}
