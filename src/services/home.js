let welcomeMessage = document.getElementById("welcomeMessage");
let userLogado = JSON.parse(localStorage.getItem("userLogado"));

if (localStorage.getItem("token") == null) {
  welcomeMessage.style.display = "none";
  alert("Você está desconectado, por favor efetue o login!");
  window.location.href =
    "../../public/screens/login.html";
}
welcomeMessage.innerHTML += `Olá ${userLogado.name}`;

function sair() {
  localStorage.removeItem("userLogado");
  localStorage.removeItem("token");

  window.location.href = "../../public/screens/login.html";
}
