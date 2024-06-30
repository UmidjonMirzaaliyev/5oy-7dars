document.addEventListener("DOMContentLoaded", function () {
  loadUsersFromLocalStorage();
});

document.getElementById("addUserButton").addEventListener("click", function () {
  document.getElementById("userFormModal").style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("userFormModal").style.display = "none";
});

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const profession = document.getElementById("profession").value;

    const user = { name, age, email, profession };
    addUserCard(user);
    saveUserToLocalStorage(user);

    document.getElementById("userForm").reset();
    document.getElementById("userFormModal").style.display = "none";
  });

function addUserCard(user) {
  const cardContainer = document.getElementById("userCards");

  const card = document.createElement("div");
  card.className = "card";

  const userName = document.createElement("h3");
  userName.textContent = user.name;

  const userAge = document.createElement("p");
  userAge.textContent = `Yosh: ${user.age}`;

  const userEmail = document.createElement("p");
  userEmail.textContent = `Email: ${user.email}`;

  const userProfession = document.createElement("p");
  userProfession.textContent = `Kasb: ${user.profession}`;

  card.appendChild(userName);
  card.appendChild(userAge);
  card.appendChild(userEmail);
  card.appendChild(userProfession);

  cardContainer.appendChild(card);
}

function saveUserToLocalStorage(user) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

function loadUsersFromLocalStorage() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.forEach((user) => {
    addUserCard(user);
  });
}

window.onclick = function (event) {
  const modal = document.getElementById("userFormModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
