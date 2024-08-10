const button = document.querySelector(".btn-modal");
const backdrop = document.querySelector(".modal-backdrop");
// const backdrop = document.querySelector(".mobile-backdrop");

// button.addEventListener("click", () => {
//     backdrop.classList.add("is-open");
// });

button.addEventListener("click", toggleModal);

backdrop.addEventListener("click", (e) => {
    const target = e.target.closest(".btn-close-modal");

    if (!target) {
        return;
    }

    toggleModal();
});

function toggleModal() {
    backdrop.classList.toggle("is-open");
}

// Burger menu

const buttonMenu = document.querySelector(".btn-menu");
// const burger = document.querySelector(".mobile-backdrop");
const burger = document.querySelector(".modal-backdrop");

buttonMenu.addEventListener("click", toggleMenu);

burger.addEventListener("click", (e) => {
    const target = e.target.closest(".btn-close-mobile");

    if (!target) {
        return;
    }

    toggleMenu();
});

function toggleMenu() {
    burger.classList.toggle("is-open");
}
