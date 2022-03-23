const myEmail = async (e) => {
  e.preventDefault();
  const userEmail = document.getElementById("user_email").value;
  const userMessage = document.getElementById("user_emailMessage").value;
  const body = {
    email: userEmail,
    message: userMessage,
  };
  await fetch("https:/karerandela.herokuapp.com/api/v1/emails", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("token")).token
      }`,
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())

    .then((json) => console.log(json));
  document.getElementById("user_email").value = "";
  document.getElementById("user_emailMessage").value = "";
};

document.getElementById("emailButton").addEventListener("click", myEmail);
