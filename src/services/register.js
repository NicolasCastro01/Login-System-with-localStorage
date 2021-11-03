


function registrar(){
  let message = document.getElementById('message')
  let user1 = document.getElementById('user')
  let password1 = document.getElementById('Password')
  let user = document.getElementById('user').value
  let password = document.getElementById('Password').value
  let listUsers = JSON.parse(localStorage.getItem('listUsers') || '[]');
  let list = JSON.parse(localStorage.getItem('listUsers'));

  let item = [];

  for(i in list){
    if(list[i].name === user){
      item.push(list[i].name)
    }
  }
  if(item == user){
    message.style.color = "red";
    message.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,.3)";
    message.style.textShadow = "1px 1px 1px black";
    message.style.fontWeight = "bolder";
    message.style.fontSize = "24";
    message.style.padding = "5px";
    message.style.border = "1px solid red";
    message.style.borderRadius = "10px";
    message.style.background = "rgb(254,134,135)";
    message.innerHTML = "Usuário já existe!";
    message.style.display = "block";
    message.style.textAlign = "center";
    user1 = ""
    password1 = ""
    item = []
  } else {
    listUsers.push(
      {
        name: user,
        password: password
      }
    )
    
    localStorage.setItem('listUsers', JSON.stringify(listUsers))
    message.innerHTML = "Conta criada.";
    message.style.color = "green";
    message.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,.3)";
    message.style.textShadow = "1px 1px 1px black";
    message.style.fontWeight = "bolder";
    message.style.fontSize = "24";
    message.style.padding = "5px";
    message.style.border = "1px solid green";
    message.style.borderRadius = "10px";
    message.style.background = "greenYellow";
    message.style.display = "block";
    message.style.textAlign = "center";
  } 
}
