const STORAGE_KEY = "users";

// pegar usuários
function getUsers() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// salvar usuários
function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

// mensagem
function showMessage(msg, type = "error") {
  const el = document.getElementById("registerMessage");
  el.textContent = msg;
  el.className = type;
}

// cadastrar
function handleRegister(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!nome || !email || !senha) {
    showMessage("Preencha todos os campos!");
    return;
  }

  const users = getUsers();

  // verifica duplicado
  const existe = users.find(u => u.email === email);

  if (existe) {
    showMessage("E-mail já cadastrado!");
    return;
  }

  // salva
  users.push({ nome, email, senha });
  saveUsers(users);

  showMessage("Cadastro realizado com sucesso!", "success");

  // 🔥 redireciona
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}

// init
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("registerForm")
    .addEventListener("submit", handleRegister);
});