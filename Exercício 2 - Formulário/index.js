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

  const API_ID = "60560cc465f3482189a2a78200ce36e6";

  const response = await fetch(`https://crudcrud.com/api/${API_ID}/users`, {
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

