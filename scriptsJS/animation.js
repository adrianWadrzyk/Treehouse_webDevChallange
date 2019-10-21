window.addEventListener("load", () => {
    const ourServices = document.getElementById("ourServices");
    ourServices.style.animation = "showing 5s";

    const menu = document.getElementById("nav");
    menu.style.animation = "showing 5s";

    const main = document.getElementById("main");
    var mainChildren = main.children;

    main.style.animation = "slide-left 2s";

    // show main section elements
    showChild = this.setTimeout(function() {
        for (const el of mainChildren) {
            el.style.animation = "showing 3s forwards";
        }
    }, 2200);

    const offer = document.getElementById("offer");
    const cultureValueTiles = document.querySelectorAll(".culture__value > .tiles");

    //scroll animation for sections
    var onScrollHandler = () => {
        let licznik = 0;
        let clRectOffer = offer.getBoundingClientRect();
        let clRectCultureValue = cultureValueTiles[0].parentNode.getBoundingClientRect();

        if (clRectOffer.top < 550) {
            offer.style.animation = "showing 3s forwards";
            licznik++;
        }

        if (clRectCultureValue.top < 550) {
            for (let el of cultureValueTiles) {
                el.style.animation = " resize 3s forwards";
            }
            licznik++;
        }
        if (licznik == 2) {
            window.removeEventListener('scroll', onScrollHandler);
        }
    };

    window.addEventListener('scroll', onScrollHandler, false);




});