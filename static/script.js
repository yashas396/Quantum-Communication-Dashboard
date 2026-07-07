function showMessage() {
    alert(
        "Welcome to the Quantum Communication Dashboard!\n\nInitializing quantum simulation environment..."
    );
}

/* ---------------- VIDEO PARALLAX ---------------- */

const bgVideo = document.getElementById("bgVideo");

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 28;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 28;
    updateVideoMotion();
});

window.addEventListener("scroll", () => {
    updateVideoMotion();
    revealOnScroll();
});

function updateVideoMotion() {
    const scrollY = window.scrollY;

    const rise = scrollY * -0.22;
    const zoom = 1.1 + scrollY * 0.00035;

    bgVideo.style.transform = `
        translate(${mouseX}px, ${rise + mouseY}px)
        scale(${zoom})
    `;
}

/* ---------------- FLOATING PARTICLES ---------------- */

const particleContainer = document.createElement("div");
particleContainer.className = "particle-container";
document.body.appendChild(particleContainer);

for (let i = 0; i < 45; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.animationDuration = 6 + Math.random() * 8 + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";

    particleContainer.appendChild(particle);
}

/* ---------------- PARTICLE MOUSE REACTION ---------------- */

document.addEventListener("mousemove", (e) => {
    const particles = document.querySelectorAll(".particle");

    particles.forEach((particle) => {
        const rect = particle.getBoundingClientRect();
        const px = rect.left + rect.width / 2;
        const py = rect.top + rect.height / 2;

        const dx = px - e.clientX;
        const dy = py - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
            const angle = Math.atan2(dy, dx);
            const force = (120 - distance) / 3;

            particle.style.transform = `
                translate(${Math.cos(angle) * force}px,
                ${Math.sin(angle) * force}px)
                scale(1.8)
            `;
            particle.style.opacity = "1";
        } else {
            particle.style.transform = "translate(0,0) scale(1)";
            particle.style.opacity = "0.6";
        }
    });
});

/* ---------------- 3D CARD TILT ---------------- */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -14;
        const rotateY = ((x / rect.width) - 0.5) * 14;

        card.style.transform = `
            perspective(900px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-15px)
            scale(1.03)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

/* ---------------- SCROLL REVEAL ---------------- */

const revealElements = document.querySelectorAll(".hero h2, .hero p, button, .card, .quantum-section h2, .quantum-section p");

revealElements.forEach((el) => {
    el.classList.add("reveal");
});

function revealOnScroll() {
    revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 80) {
            el.classList.add("active");
        }
    });
}

revealOnScroll();

/* ---------------- GLOW TRAIL CURSOR ---------------- */

const cursorGlow = document.createElement("div");
cursorGlow.className = "cursor-glow";
document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});