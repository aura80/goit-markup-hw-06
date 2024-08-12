// document.addEventListener('DOMContentLoaded', function () {
//     const buttonModal = document.querySelector(".btn-modal");
//     const backdropModal = document.querySelector(".modal-backdrop");

//     buttonModal.addEventListener("click", toggleModal);

//     backdropModal.addEventListener("click", (e) => {
//         const target = e.target.closest(".btn-close-modal");

//         if (!target) {
//             return;
//         }

//         toggleModal();
//     });

//     function toggleModal() {
//         backdropModal.classList.toggle("is-open");
//     }

// //     // Burger menu

//     const buttonBurger = document.querySelector(".btn-menu");
//     const backdropBurger = document.querySelector(".mobile-backdrop");

//     buttonBurger.addEventListener("click", toggleBurger);

//     backdropBurger.addEventListener("click", (e) => {
//         const target = e.target.closest(".btn-close-mobile");

//         if (!target) {
//             return;
//         }

//         toggleBurger();
//     });

//     function toggleBurger() {
//         backdropBurger.classList.toggle("is-open");
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector(".btn-menu");
  const orderServiceButton = document.querySelector(".btn-modal");
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const mobileBackdrop = document.querySelector(".mobile-backdrop");
  // Funcție pentru a deschide meniul mobil
    burgerButton.addEventListener("click", function () {
        mobileBackdrop.classList.toggle("hidden"); // toggle afișează sau ascunde meniul
        modalBackdrop.classList.add("hidden"); // asigură-te că modalul este ascuns
    });
  // Funcție pentru a deschide modalul de servicii
    orderServiceButton.addEventListener("click", function () {
        modalBackdrop.classList.toggle("hidden"); // toggle afișează sau ascunde modalul
        mobileBackdrop.classList.add("hidden"); // asigură-te că meniul este ascuns
    });
    
});

