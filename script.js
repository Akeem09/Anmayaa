const flowers = [
    "roses.png",
    "jasmine.png",
    "mogra.png",
    "sunflower.png"
];

const container = document.getElementById("flower-container");

for(let i = 0; i < 50; i++){

    const flower = document.createElement("img");

    flower.src = flowers[Math.floor(Math.random() * flowers.length)];

    flower.classList.add("flower");

    flower.style.left = Math.random() * 100 + "%";
    flower.style.top = Math.random() * 100 + "%";

    flower.style.width =
        (60 + Math.random() * 60) + "px";

    flower.style.animationDelay =
        (Math.random() * 3) + "s";

    container.appendChild(flower);
}

window.addEventListener("load", () => {

    const music = document.getElementById("bgMusic");

    music.play().catch(() => {
        console.log("Autoplay blocked by browser");
    });

});
