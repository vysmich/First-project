let contactBtn = document.querySelector(".contact-btn");
let contactFormPos = document.getElementById("contact-form");
let galleryBtn = document.querySelector(".gallery-btn");
let galleryEntrance = document.getElementById("gallery-entrance");

let RepairScroll = (contactBtn, aim) => {
    contactBtn.onclick = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: aim.offsetTop - 150,
            behavior: "smooth",
        });
    };
};

if (contactBtn) {
    RepairScroll(contactBtn, contactFormPos);
}
if (galleryBtn) {
    RepairScroll(galleryBtn, galleryEntrance);
}
