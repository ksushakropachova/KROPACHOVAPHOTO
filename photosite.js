const images = document.querySelectorAll(".photoGrid img");
let imgSrc;
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc);
    });
});

let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".container").append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "btnClose");
    closeBtn.insertAdjacentText('beforeend', 'x');
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};


