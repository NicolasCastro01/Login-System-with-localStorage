function entrar() {
  let usuario = document.getElementById("user");
  let senha = document.getElementById("Password");
  let message = document.getElementById('message');

  let userValid = {
    name: "",
    password: "",
  };
  let list = JSON.parse(localStorage.getItem("listUsers"));
  list.forEach((item) => {
    if (usuario.value == item.name && senha.value == item.password) {
      userValid = {
        name: item.name,
        password: item.password,
      };
    }
  });

  if (usuario.value == userValid.name && senha.value == userValid.password) {
    
    let mathRandom = Math.random().toString(16).substr(2);

    let token = mathRandom + mathRandom;

    localStorage.setItem("token", token);
    localStorage.setItem("userLogado", JSON.stringify(userValid));
    message.style.color = "green";
    message.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,.3)";
    message.style.textShadow = "1px 1px 1px black";
    message.style.fontWeight = "bolder";
    message.style.fontSize = "24";
    message.style.padding = "5px";
    message.style.border = "1px solid green";
    message.style.borderRadius = "10px";
    message.style.background = "greenYellow";
    message.innerHTML = "Logado com sucesso!";
    message.style.display = "block";
    message.style.textAlign = "center";
    window.location.href = "../../public/screens/home.html"
  } else {
    message.style.color = "red";
    message.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,.3)";
    message.style.textShadow = "1px 1px 1px black";
    message.style.fontWeight = "bolder";
    message.style.fontSize = "24";
    message.style.padding = "5px";
    message.style.border = "1px solid red";
    message.style.borderRadius = "10px";
    message.style.background = "rgb(254,134,135)";
    message.innerHTML = "Usuário ou senha incorreta!";
    message.style.display = "block";
    message.style.textAlign = "center";
    
  }
}

function registerScreen() {
  window.location.href = "../../public/screens/register.html";
}
