let cursor = document.getElementById('cursor');
let mouseTop = 0;
let mouseLeft = 0;
let pageY = 0;
let pageX = 0;

document.addEventListener('mousemove', (event) => {
    mouseTop = event.clientY - 15;
    mouseLeft = event.clientX - 15;

    updateCursor()
});

document.addEventListener('scroll', (event) => {
    pageY = window.pageYOffset;
    pageX = window.pageXOffset;

    updateCursor()
})


function updateCursor() {
    cursor.style.left = pageX + mouseLeft + "px";
    cursor.style.top = pageY + mouseTop + "px";
}

