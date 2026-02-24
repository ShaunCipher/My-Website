// Navigation Elements
const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

/* =========================
   1. MOBILE MENU TOGGLE
========================= */
if (burger && navMenu) {
    burger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        burger.classList.toggle("toggle");
    });

    // Close menu when clicking a link (important for single-page links)
    document.querySelectorAll(".nav-item").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            burger.classList.remove("toggle");
        });
    });

    // Close menu when clicking anywhere outside the menu
    document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !burger.contains(e.target)) {
            navMenu.classList.remove("active");
            burger.classList.remove("toggle");
        }
    });
}

/* =========================
   2. SCROLL EFFECT: SHRINK LOGO
========================= */
window.addEventListener("scroll", () => {
    const logo = document.querySelector(".logo img");
    if (logo) {
        // Using window.pageYOffset for better browser compatibility
        const scrollDistance = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollDistance > 50) {
            logo.style.maxHeight = "30px";
        } else {
            logo.style.maxHeight = "45px";
        }
    }
});

/* =========================
   3. ABOUT PAGE: FLIP CARD
========================= */
const flipCard = document.querySelector(".flip-card");
if (flipCard) {
    setInterval(() => {
        // We check the actual style property to ensure toggle works every time
        const currentTransform = flipCard.style.transform;
        if (currentTransform === "rotateY(180deg)") {
            flipCard.style.transform = "rotateY(0deg)";
        } else {
            flipCard.style.transform = "rotateY(180deg)";
        }
    }, 5000);
}