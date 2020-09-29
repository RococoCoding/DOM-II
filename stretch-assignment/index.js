let blocks = document.querySelectorAll(".block");

//add event listeners
window.addEventListener("mouseup", mouseUp); //can't set event listener to block because block moves. mouseup won't log unless it's on the block. must set it in window.
window.addEventListener("mousedown", blastOff);
for (let i of blocks) {
    i.addEventListener("click", jump); //single click
    // i.addEventListener("mousedown", blastOff);
}

let mouseDown = false;
let currentPos = 10;
let blast;
let movedBlock;

//event functions
function jump(e) {
    let offset = 110;
    mouseDown = false;
    for (let i in blocks) {
        if (blocks[i] === e.target && i > 0) {
            offset = 120*i; //each block is 100 px plus margin. i is number of blocks to jump
            movedBlock = blocks[i];
        }
    }
    let counter = 1; // 
    for (let i of blocks) {
        if (i === movedBlock) {
            movedBlock.style.order = 0;
        }
        else {
            i.style.order = counter;
            counter++;
        }
    }
    gsap.fromTo(movedBlock, {y: `${offset}`}, {duration: 1, y: 0});
    movedBlock = null;
}

function blastOff(e) {
    mouseDown = true;
    setTimeout(() => {
        if (mouseDown) {
            blast = setInterval(move, 100);
            if (!movedBlock) movedBlock = e.target;
            function move() {
                if (currentPos < 900) {
                    gsap.to(movedBlock, {duration: 1, x:`${currentPos+100}`});
                    currentPos = currentPos+100;
                }
            }
        }
    }, 150);
}   

function mouseUp() {
    clearInterval(blast);
    gsap.to(movedBlock, {duration: 1, x: 0});
    currentPos = 0;
}
