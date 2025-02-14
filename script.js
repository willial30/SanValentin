// Función para mostrar un mensaje de amor cuando presionan "Sí"
function showLove() {
    alert("¡Sabía que dirías que sí! 💖🥰 ¡Te amo!");
}

// Hace que el botón "No" se mueva
document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseover", () => {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 100);
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});