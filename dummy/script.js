document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { duration: 0.3, rotateX: 0, rotateY: 0, scale: 1.05 });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, { duration: 0.3, rotateX: 10, rotateY: -10, scale: 1 });
        });
    });
});
