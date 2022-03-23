fetch("https:/karerandela.herokuapp.com/api/v1/subscrib", {
  method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then(
    (json) =>
      (document.getElementById("dsSubTable").innerHTML = json.data.email
        .map(
          (email) => `
         
         <table class="table">
         
            <tr class="low lowShadow">
              <td class="colomn1">${email.createAt
                .split("")
                .slice(0, 10)
                .join("")
                .substring(0, 15)}</td>
              <td class="colomn2">${email.email.substring(0, 20)}</td>
              <td> <button id="Delete" class="Delete articleButton" 
              onclick=getSubscribId('${email._id}')>delete</button></td>
            </tr>
           
          </table>
          </div>
      `
        )
        .reverse()
        .join(""))
  );

async function getSubscribId(id) {
  await fetch(`https:/karerandela.herokuapp.com/api/v1/subscrib/${id}`, {
    method: "delete",
    // mode: "no-cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("token")).token
      }`,
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .then(() => location.reload());
}
