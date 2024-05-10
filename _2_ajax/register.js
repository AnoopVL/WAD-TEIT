function saveData() {
  let name, email, password;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let userRecord = JSON.parse(localStorage.getItem("users")) || [];

  if (
    userRecord.some((v) => {
      return v.email == email;
    })
  ) {
    alert("Email already exists!!");
  } else {
    let postObject = {
      name: name,
      email: email,
      password: password,
    };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/users/"); // fake_endpoint since we're not actually sending data to a server
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(postObject));

    xhr.onload = () => {
      if (xhr.status == 201) {
        alert("Registration successful!!");
        userRecord.push(postObject);
        localStorage.setItem("users", JSON.stringify(userRecord));
        window.location.href = "login.html";
      } else {
        alert("Error: Registration failed!");
      }
    };
  }
}
