const flowers = [
    "roses.png",
    "jasmine.png",
    "mogra.png",
    "Sunflower_PNG_Image.png"
];

const container = document.getElementById("flower-container");

for(let i = 0; i < 50; i++){

    let left, top;

    do{
        left = Math.random() * 100;
        top = Math.random() * 100;
    }
    while(
        left > 30 && left < 70 &&
        top > 30 && top < 70
    );

    const flower = document.createElement("img");

    flower.src =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.classList.add("flower");

    flower.style.left = left + "%";
    flower.style.top = top + "%";

    flower.style.width = "60px";
    flower.style.height = "60px";
    flower.style.objectFit = "contain";

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
