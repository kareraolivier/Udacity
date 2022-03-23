// const Sendemail = (e) => {
//   e.preventDefault();

//   function getDate(dateTime) {
//     return `${dateTime.getDate()}-${
//       dateTime.getMonth() + 1
//     }-${dateTime.getFullYear()}`;
//   }
//   const date = getDate(new Date());
//   const userEmail = document.getElementById("user_email").value;
//   const userMsg = document.getElementById("user_emailMessage").value;

//   db.collection("email")
//     .add({
//       date: date,
//       uemail: userEmail,
//       message: userMsg,
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// document.getElementById("Button").addEventListener("click", Sendemail);

// ......................................comments........................................

// const comment = (e) => {
//   e.preventDefault();
//   const commentName = document.getElementById("comment_name").value;
//   const commentText = document.getElementById("comment_text").value;

//   db.collection("comment")
//     .add({
//       name: commentName,
//       comment: commentText,
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// document.getElementById("comment_button").addEventListener("click", comment);
