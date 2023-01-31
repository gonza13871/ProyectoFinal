document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active");
            document.querySelector(".act").classList.add("active");
        });
    }
});