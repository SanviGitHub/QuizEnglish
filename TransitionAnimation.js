document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("animation-container");

  // Crear el elemento de la animación
  const overlay = document.createElement("div");
  overlay.className = "transition-overlay";

  const text = document.createElement("div");
  text.className = "fade-text";
  text.textContent = "Transportándote...";

  overlay.appendChild(text);
  container.appendChild(overlay);

  // Desaparecer después de 3 segundos y redirigir
  setTimeout(() => {
    container.innerHTML = ""; // Remover el contenido
    window.location.replace("/404");
  }, 3000);
});
