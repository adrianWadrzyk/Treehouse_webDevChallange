window.addEventListener("load", function() {
    const ourServices = document.getElementById("ourServices");
    ourServices.style.animation = "showing 5s";

    const menu = document.getElementById("nav");
    menu.style.animation = "showing 5s";

    const main = document.getElementById("main");
    var mainChildren = main.children;

    for (let i = 0; i < mainChildren.length; i++) {
        mainChildren[i].style.opacity = 0;
    }

    main.style.animation = "slide-left 3s";

    showChild = this.setTimeout(function() {
        for (let i = 0; i < mainChildren.length; i++) {
            mainChildren[i].style.opacity = 1;
        }
    }, 3200);
});