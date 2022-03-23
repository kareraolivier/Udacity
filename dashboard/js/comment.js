fetch("https:/karerandela.herokuapp.com/api/v1/comments", {
  method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then(
    (json) =>
      (document.getElementById("myComment").innerHTML = json.data.Comment.map(
        (Comment) =>
          `
          <div class="getArticle">
              <h1 class="articleTitle">${Comment.fullName}</h1>
              <p class="articleBody">
                ${Comment.comment.substring(0, 400)}
              </p>
               <p>${Comment.createAt.split("").slice(0, 10).join("")}</p>
                 
               <button id="Delete" class="Delete articleButton" onclick=getCommentId('${
                 Comment._id
               }')>Delete</button>

              </div>
            `
      )
        .reverse()
        .join(""))
  );

//   Delete........................................

async function getCommentId(id) {
  await fetch(`https:/karerandela.herokuapp.com/api/v1/subscrib/${id}`, {
    method: "delete",

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
