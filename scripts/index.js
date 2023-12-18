// Utility functions
function randint(max) {
    return Math.round(Math.random() * max);
}

function selectRandom(array) {
    return array[randint(array.length - 1)];
}

const isHover = (e) => e.parentElement.querySelector(":hover") === e;

// Splash screen
(() => {
    let splash = document.querySelector(".splash");
    let loadingDots = document.querySelectorAll(".loading-dot");

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            loadingDots.forEach((element, idx) => {
                setTimeout(() => {
                    element.classList.add("active");
                }, (idx + 1) * 400);
            });

            setTimeout(() => {
                loadingDots.forEach((element, idx) => {
                    setTimeout(() => {
                        element.classList.remove("active");
                        element.classList.add("fade");
                    }, (idx + 1) * 50);
                });
            }, 2500);

            setTimeout(() => {
                splash.style.top = "-100vh";
            }, 2800);

            setTimeout(() => {
                splash.style.top = "-500vh";
            }, 3200);

            setTimeout(() => {
                document.body.removeChild(splash);
            }, 3700);
        });

        let trackImage = document.querySelectorAll(".track-image");
        trackImage.forEach((image, idx) => {
            let X = offsets[idx][0];
            let Y = offsets[idx][1];
            image.animate(
                {
                    objectPosition: `${X}% ${Y}%`,
                },
                { duration: 500, fill: "forwards" },
            );
        });
    });
})();

// Scrolling parallax effect

// Get the percentage of scroll
let scrollX = 0,
    scrollY = 0;
let mouseX = 0,
    mouseY = 0;

// Weights in% to move the images(updated using scroll and mouse move)
let weightx = 0,
    weighty = 0;

// Weights for scroll and mouse move
let scrollWeight = 6,
    mouseWeight = 4;

// Offsets for each image
let offsets = [
    [20, 50],
    [-80, 50],
    [20, -50],
    [-80, -50],
];

// Find the current mouse pos and scroll pos
document.addEventListener("scroll", () => {
    scrollX =
        Math.round(
            (window.scrollX / (document.body.scrollWidth - window.innerWidth)) *
                10000,
        ) / 100;
    scrollY =
        Math.round(
            (window.scrollY /
                (document.body.scrollWidth - window.innerHeight)) *
                10000,
        ) / 100;
    const tracks = document.querySelectorAll(".track");

    updateParallax();
});

document.addEventListener("mousemove", (event) => {
    mouseX = ((event.clientX / document.body.clientWidth) * 10000) / 100;
    mouseY = ((event.clientY / document.body.clientHeight) * 10000) / 100;

    updateParallax();
});

const updateParallax = () => {
    let trackImage = document.querySelectorAll(".track-image");
    trackImage.forEach((image, idx) => {
        let X =
            offsets[idx][0] +
            (scrollX * scrollWeight + mouseX * mouseWeight) /
                (scrollWeight + mouseWeight);
        let Y =
            offsets[idx][1] +
            (scrollY * scrollWeight + mouseY * mouseWeight) /
                (scrollWeight + mouseWeight);

        // Clamp x and y to 0 <= x,y <= 100
        X = Math.max(0, Math.min(100, X));
        Y = Math.max(0, Math.min(100, Y));

        image.animate(
            {
                // Untested for images 2-4
                objectPosition: `${X}% ${Y}%`,
            },
            { duration: 500, fill: "forwards" },
        );
    });
};

// Text Stuff
let colorsA1 = ["#ffffff", "#FFFF99", "#ADD8FF", "#90EE90"];

const trackA1 = document.querySelector("#track-a-1");
function A1ColorCheck(event) {
    if (isHover(trackA1)) trackA1.style.color = selectRandom(colorsA1);
    else trackA1.style.color = colorsA1[0];
}

// Canvas Stuff
let drawingCanvas = false;
let canvasIsEnabled = false;
let canvasColor = colorsA1[0];

const canvas = document.querySelector("#track-canvas");
const ctx = canvas.getContext("2d");

const canvasEnableButton = document.querySelector("#uwu-popup-menu");
const canvasColorsButton = document.querySelector("#uwu-popup-menu-colors");
const canvasClearButton = document.querySelector("#uwu-popup-menu-clear");
function enableCanvas() {
    canvasIsEnabled = true;
    canvas.style.visibility = "visible";
    canvasColorsButton.style.visibility = "visible";
    canvasClearButton.style.visibility = "visible";
    canvas.style.border = `5px solid ${canvasColor}`;
}

function disableCanvas() {
    canvasIsEnabled = false;
    canvas.style.visibility = "hidden";
    canvasColorsButton.style.visibility = "hidden";
    canvasClearButton.style.visibility = "hidden";
}

function changeCanvasColor() {
    canvasColor = prompt("Enter a color", colorsA1[0]);
    canvas.style.border = `5px solid ${canvasColor}`;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("load", () => {
    function setCanvasSize() {
        canvas.width = window.innerWidth - 10;
        canvas.height = window.innerHeight - 100;
        draw();
    }
    setCanvasSize();
    disableCanvas();

    window.addEventListener("resize", setCanvasSize);

    function startDrawing(e) {
        if (canvasIsEnabled && isHover(canvas)) {
            drawingCanvas = true;
            draw(e);
        }
    }

    function stopDrawing() {
        if (canvasIsEnabled && isHover(canvas)) {
            drawingCanvas = false;
            ctx.beginPath();
        }
    }

    function draw(e) {
        if (!(canvasIsEnabled && drawingCanvas)) return;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.strokeStyle = canvasColor;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);
});

// Mouse Move stuff
document.addEventListener("mousemove", (e) => {
    A1ColorCheck(e);
});

document.addEventListener("mousedown", (e) => {
    if (isHover(canvasEnableButton)) {
        if (!canvasIsEnabled) enableCanvas(e);
        else disableCanvas(e);
    }
    if (isHover(canvasColorsButton)) changeCanvasColor(e);
    if (isHover(canvasClearButton)) clearCanvas(e);
});
