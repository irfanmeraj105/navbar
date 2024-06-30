let linkitems= document.querySelectorAll(".link-item");

linkitems.forEach((linkitem, index)=>{
linkitem.addEventListener('click',() => {
    document.querySelector(".active").classList.remove("active");
    linkitem.classList.add("active");
    let indicator=document.querySelector(".indicator");
    indicator.style.left=`${index * 110 + 55}px`;
});
});