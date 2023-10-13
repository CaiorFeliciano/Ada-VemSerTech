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
      return data
    }
}


