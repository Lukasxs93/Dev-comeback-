

const button = document.getElementById("button");

button.addEventListener("click", (event) => {
 event.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

console.log(name, email, message);
});