// Animación de scroll reveal
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
});

// Formulario
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if(name && email && message){
    formMessage.textContent = "✅ Mensaje enviado correctamente. ¡Te responderemos pronto!";
    formMessage.style.color = "green";
    this.reset();
  } else {
    formMessage.textContent = "⚠️ Por favor completa todos los campos.";
    formMessage.style.color = "red";
  }
});
