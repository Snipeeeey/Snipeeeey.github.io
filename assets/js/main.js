const input = document.querySelectorAll("input");
const profilLogo = document.querySelectorAll(".profil-logo");
const modal = document.querySelector(".modal-container");

const toggleModal = () => {
  modal.classList.toggle("active");
};

input.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      input.value = "";
      input.blur();
    }
  });
});

profilLogo.forEach((logo) => {
  logo.addEventListener("click", toggleModal);
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    toggleModal();
  }
});


function copyToClipboard() {
  const textToCopy = "robinn#2938";
  navigator.clipboard.writeText(textToCopy);
  const messageElement = document.querySelector(".message .m");
  messageElement.textContent = "Copied!";
  setTimeout(() => {
    messageElement.textContent = "Add on Discord!";
  }, 2000); // Set the text back to the original after 2 seconds
}
