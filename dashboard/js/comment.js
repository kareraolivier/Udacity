db.collection("comment").onSnapshot((comment) => {
  const data = comment.docs.map((doc) => ({ id: doc.id, data: doc.data() }));

  document.getElementById("dsComment").innerHTML = data
    ?.map(
      (comment) =>
        `
        <div key=${comment?.id}>
      <p>${comment?.data?.commentName}</p>
      <p>${comment?.data?.commentText}</p>
      </div>
      `
    )
    .join("");
});
