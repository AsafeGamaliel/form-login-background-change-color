const balls = document.querySelectorAll(".ball");

balls.forEach(ball => {
    ball.addEventListener("click", (e) => {
        const themeColor = getComputedStyle(e.target).getPropertyValue("background-color");
        document.documentElement.style.setProperty("--theme-color", themeColor);
    })
})
 