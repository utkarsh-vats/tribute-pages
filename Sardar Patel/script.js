let content = document.getElementById("content");
let overlay = document.getElementById("overlay");
let wrap = document.getElementById("wrap");

wrap.onmouseenter = () => {
    content.style.transform = "translate(-200%, 0)";
    overlay.style.bottom = "0";
}

wrap.onmouseleave = () => {
    content.style.transform = "translate(0%, 0)";
    overlay.style.bottom = "-100%";
}