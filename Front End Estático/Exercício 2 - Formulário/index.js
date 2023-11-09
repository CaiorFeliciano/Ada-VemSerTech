async function post(bodyData) {
  const response = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });

  if (response.ok) {
    const result = await response.json();
    console.log("Success", result);
  } else {
    console.error("Error:", response.statusText);
  }
}

async function getUsers() {
  const response = await fetch("http://localhost:3001/users");
  if (response.ok) {
    const data = await response.json();
    renderTable(data);
  }
}

function renderTable(users) {
  const tableBody = document.querySelector("#userTable tbody");

  users.forEach((user) => {
    //cria nova row
    const row = document.createElement("tr");
    //cria nova células
    const name = document.createElement("td");
    const password = document.createElement("td");
    const email = document.createElement("td");
    const phonenumber = document.createElement("td");
    const checkbox = document.createElement("td");
    //adicionar contúdo as células
    name.textContent = user.name;
    password.textContent = user.password;
    phonenumber.textContent = user.phonenumber;
    email.textContent = user.email;
    checkbox.textContent = user.checkbox;
    //adionando conteúdo a tabela
    row.appendChild(name);
    row.appendChild(password);
    row.appendChild(email);
    row.appendChild(phonenumber);
    row.appendChild(checkbox);
    tableBody.appendChild(row);
  });
}

// variaveis para guardar se ha erro nos campos
// usadas para mostrar os erros e para prevenir submit com erros
let nameErrorBoolean = false;
let passwordErrorBoolean = false;
let emailErrorBoolean = false;
let phonenumberErrorBoolean = false;

// pegar os elementos de mensagem de erro do DOM
const nameErrorElement = document.getElementById("name-error");
const passwordErrorElement = document.getElementById("password-error");
const emailErrorElement = document.getElementById("email-error");
const phonenumberErrorElement = document.getElementById("phonenumber-error");

function showOrHideErrorMessages () {
// se tem erro, remove a classe que esconde o erro, assim ele aparece
if (nameErrorBoolean) nameErrorElement.classList.remove('hide-name-error');
if (passwordErrorBoolean) passwordErrorElement.classList.remove('hide-password-error');
if (emailErrorBoolean) emailErrorElement.classList.remove('hide-email-error');
if (phonenumberErrorBoolean) phonenumberErrorElement.classList.remove('hide-phonenumber-error');

// se não há erro, coloca a classe que esconde o erro
if (!nameErrorBoolean) nameErrorElement.classList.add('hide-name-error');
if (!passwordErrorBoolean) passwordErrorElement.classList.add('hide-password-error');
if (!emailErrorBoolean) emailErrorElement.classList.add('hide-email-error');
if (!phonenumberErrorBoolean) phonenumberErrorElement.classList.add('hide-phonenumber-error');
}
''
// grupo de funções para verificar se inputs são validos
function isNameValid(name) {
  const nameRegex = new RegExp(/^[a-zA-Z -]+$/);
  return nameRegex.test(name);
}

function isPasswordValid(password) {
  const passwordRegex = new RegExp(/^.{8,}$/);
  return passwordRegex.test(password);
}

function isEmailValid(email) {
  const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);
  return emailRegex.test(email);
}

function isPhonenumberValid(phonenumber) {
  const phonenumberRegx = new RegExp(/^.{10,}$/);
  return phonenumberRegx.test(phonenumber);
}

//função que válida todos os inputs do form por erros, seta os booleanos
function validateFormInputs(bodyData) {
  // checa se nome é valido
  if (bodyData.name === '' || !isNameValid(bodyData.name)) {
    nameErrorBoolean = true;
  } else nameErrorBoolean = false;

  // checa se senha é valida
  if (bodyData.password === '' || !isPasswordValid(bodyData.password)) {
    passwordErrorBoolean = true;
  } else passwordErrorBoolean = false;

  // checa se email é valido
  if (bodyData.email === '' || !isEmailValid(bodyData.email)) {
    emailErrorBoolean = true;
  } else emailErrorBoolean = false;

  // checa se numero de telefone é valido
    if (bodyData.phonenumber === '' || !isPhonenumberValid(bodyData.phonenumber)) {
    phonenumberErrorBoolean = true;
  } else phonenumberErrorBoolean = false; 

  // mostra ou esconde os erros baseados nos valores dos booleanos
  showOrHideErrorMessages();
}

function submitHandler() {
  const formData = new FormData(document.querySelector("form"));
  const name = formData.get("name");
  const password = formData.get("password");
  const email = formData.get("email");
  const phonenumber = formData.get("number");
  const checkbox = formData.get("checkbox");

  const bodyData = {
    name: name,
    password: password,
    email: email,
    phonenumber: phonenumber,
    checkbox: checkbox,
  };

  validateFormInputs(bodyData);

  // verificação se há ao menos um erro
  const errorsCheck = nameErrorBoolean || passwordErrorBoolean || emailErrorBoolean || phonenumberErrorBoolean;

  if (errorsCheck) {
    console.error('existem campos com erros');
    // return vai encerrar execucao da funcao nesse ponto
    return;
  }

  post(bodyData)
}
