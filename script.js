document.addEventListener("DOMContentLoaded", () => {

const items = document.querySelectorAll(".fade-up");

items.forEach((item,index)=>{
item.style.animationDelay = (index*0.12)+"s";
});

});
