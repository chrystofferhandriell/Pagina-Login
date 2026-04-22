
// ===============================
// SCROLL SUAVE MENU
// ===============================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===============================
// BOTÕES DE PLANOS
// ===============================
document.querySelectorAll(".plan button").forEach(btn => {
  btn.addEventListener("click", () => {
    showToast("Plano selecionado com sucesso! 💪");
  });
});

// ===============================
// TOAST (NOTIFICAÇÃO)
// ===============================
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;

  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.background = "#ff3c00";
  toast.style.padding = "15px";
  toast.style.borderRadius = "5px";
  toast.style.color = "#fff";
  toast.style.zIndex = "999";

  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// ===============================
// MODAL DE IMAGEM (GALERIA)
// ===============================
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");

    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.8)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "1000";

    const image = document.createElement("img");
    image.src = img.src;
    image.style.maxWidth = "90%";
    image.style.borderRadius = "10px";

    modal.appendChild(image);
    document.body.appendChild(modal);

    // fechar clicando fora
    modal.addEventListener("click", () => modal.remove());

    // fechar com ESC
    document.addEventListener("keydown", function esc(e) {
      if (e.key === "Escape") {
        modal.remove();
        document.removeEventListener("keydown", esc);
      }
    });
  });
});

// ===============================
// ANIMAÇÃO AO APARECER (SCROLL)
// ===============================
const elements = document.querySelectorAll("section");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

// estado inicial
elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);

// ===============================
// FORMULÁRIO DE CONTATO (SIMULADO)
// ===============================
const contatoSection = document.getElementById("contato");

if (contatoSection) {
  const form = document.createElement("form");

  form.innerHTML = `
    <input type="text" placeholder="Seu nome" required style="padding:10px; margin:5px;">
    <input type="email" placeholder="Seu email" required style="padding:10px; margin:5px;">
    <textarea placeholder="Mensagem" required style="padding:10px; margin:5px;"></textarea>
    <button type="submit">Enviar</button>
  `;

  contatoSection.appendChild(form);

  form.addEventListener("submit", e => {
    e.preventDefault();
    showToast("Mensagem enviada com sucesso! 📩");
    form.reset();
  });
}
