// Your code goes here
let funbus = document.getElementById("funbus");
funbus.addEventListener("click", drive);
function drive(){
    gsap.fromTo("#funbus", {duration: 5, x: 300}, {duration: 3, x: 0, ease: "bounce"});
}

let adv = document.getElementById("adventure");
adv.addEventListener("mouseover", style);

function style() {
    gsap.fromTo("#adventure", {duration: 1, fontSize: "3rem"}, {duration: 1, fontSize: "1.6rem"});
}
