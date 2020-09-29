let blocks = document.querySelectorAll(".block");

for (let i in blocks) {
    blocks[i].addEventListener("click", jump);
}

function jump(e) {
    let offset = 110;
    let chosen;
    for (let i in blocks) {
        if (blocks[i] === e.target && i > 0) {
            offset = 120*i;
            chosen = blocks[i];
        }
    }
    let counter = 1;
    for (let i of blocks) {
        if (i === chosen) {
            chosen.style.order = 0;
        }
        else {
            i.style.order = counter;
            counter++;
        }
    }
    gsap.fromTo(e.target, {y: `${offset}`}, {duration: 1, y: 0});
}