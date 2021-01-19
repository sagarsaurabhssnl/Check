function gamestatemainmenu() {
    if (gamestate === "mainmenu") {
        if (mousePressedOver(start)) {
            start.visible = false;
            gamestate = "play";
        }
        if (mousePressedOver(infoHtml)) {
            infoHtml.visible = false;
            info.style.display = "block";
            canvas.style.display = "none";
        }
    }
}