const mySubscrib = async (e) => {
  e.preventDefault();
  const userEmail = document.getElementById("subInput").value;

  const body = {
    email: userEmail,
  };
  await fetch("https:/karerandela.herokuapp.com/api/v1/subscrib", {
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
  document.getElementById("subInput").value = "";
};

document.getElementById("subButton").addEventListener("click", mySubscrib);
