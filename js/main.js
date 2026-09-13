

document.addEventListener("DOMContentLoaded", () => {
lucide.createIcons();

const stars = document.getElementById("stars");
for (let i = 0; i < 62; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 72 + "%";
    star.style.setProperty("--dur", (1.2 + Math.random() * 3.4) + "s");
    star.style.animationDelay = (-Math.random() * 4) + "s";
    stars.appendChild(star);
}

const particles = document.getElementById("particles");
const particleColors = ["#56e7ff", "#9b6bff", "#a5ff73"];
for (let i = 0; i < 24; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.bottom = (-50 - Math.random() * 250) + "px";
    particle.style.setProperty("--pc", particleColors[i % particleColors.length]);
    particle.style.setProperty("--pd", (6 + Math.random() * 9) + "s");
    particle.style.animationDelay = (-Math.random() * 12) + "s";
    particles.appendChild(particle);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    }
    });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal:not(.show)").forEach(el => observer.observe(el));

const modal = document.getElementById("trailer-modal");
const trailerTriggers = document.querySelectorAll("[data-trailer-trigger]");
const closeTrailer = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
};
trailerTriggers.forEach(button => button.addEventListener("click", () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    modal.querySelector("[data-trailer-close]").focus();
}));
document.querySelector("[data-trailer-close]").addEventListener("click", closeTrailer);
modal.addEventListener("click", event => { if (event.target === modal) closeTrailer(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeTrailer(); });

const toast = document.getElementById("download-toast");
let toastTimer;
const DOWNLOAD_URL =
"../assets/download/Vexel.zip";
document.querySelectorAll("[data-download-trigger]").forEach(button => {
    button.addEventListener("click", () => {
        window.open(DOWNLOAD_URL, "_blank");
    });
});

const cursor = document.getElementById("pixel-cursor");
const scenery = document.getElementById("hero-scenery");
document.addEventListener("mousemove", event => {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
    scenery.style.transform = `translate(${(event.clientX / window.innerWidth - .5) * -12}px, ${(event.clientY / window.innerHeight - .5) * -6}px)`;
});
document.addEventListener("click", event => {
    if (window.innerWidth < 801) return;
    for (let i = 0; i < 7; i++) {
    const spark = document.createElement("span");
    spark.className = "cursor-spark";
    spark.style.left = event.clientX + "px";
    spark.style.top = event.clientY + "px";
    spark.style.setProperty("--sx", (Math.random() * 70 - 35) + "px");
    spark.style.setProperty("--sy", (Math.random() * 70 - 35) + "px");
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 600);
    }
});
});

