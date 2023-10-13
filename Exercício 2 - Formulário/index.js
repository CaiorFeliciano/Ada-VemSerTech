async function post() {
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

  const response = await fetch('http://localhost:3001/users', {
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
    
  const response = await fetch(
    'http://localhost:3001/users'
  )
    if(response.ok) {
      const data = await response.json()
      renderTable(data)
    } 
}

function renderTable(users) {
  const tableBody = document.querySelector('#userTable tbody');

  users.forEach(user => {
    //cria nova row
    const row = document.createElement('tr');
    //cria nova células
    const name = document.createElement('td');
    const password = document.createElement('td');
    const email = document.createElement('td');
    const phonenumber = document.createElement('td');
    const checkbox = document.createElement('td');
    //adicionar contúdo as células
    name.textContent = user.name;
    password.textContent = user.password;
    phonenumber.textContent = user.phonenumber
    email.textContent = user.email
    checkbox.textContent = user.checkbox;
    //adionando conteúdo a tabela
    row.appendChild(name)
    row.appendChild(password)
    row.appendChild(email)
    row.appendChild(phonenumber)
    row.appendChild(checkbox)

    tableBody.appendChild(row);
  })


}


