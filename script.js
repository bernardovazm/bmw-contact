function changeModalVisibility() {
  const modal = document.getElementById("success-modal");
  modal.classList.toggle("visible");
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let errorMessage = "Corrija os campos:";

    const fields = [
      { id: "name", message: "Por favor, preencha seu nome." },
      {
        id: "email",
        message: "Por favor, insira um e-mail válido.",
      },
      { id: "phone", message: "Por favor, insira seu telefone." },
      {
        id: "subject",
        message: "Selecione um assunto.",
        validate: (field) => field.value !== "",
      },
      { id: "message", message: "Digite sua mensagem." },
      {
        id: "privacy",
        message: "Você precisa aceitar a Política de Privacidade.",
        validate: (field) => field.checked,
      },
    ];

    let isValid = true;

    fields.forEach((fieldData) => {
      const field = document.getElementById(fieldData.id);
      const validate =
        fieldData.validate || ((field) => field.value.trim() !== "");

      if (!validate(field)) {
        isValid = false;
        errorMessage += ` ${fieldData.message}`;
        field.classList.add("invalid");
      } else {
        field.classList.remove("invalid");
      }
    });

    if (isValid) {
      changeModalVisibility();
      document.getElementById("contact-form").reset();
    } else {
      alert(errorMessage);
    }
  });

document.getElementById("close-modal").addEventListener("click", function () {
  changeModalVisibility();
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.querySelector(".menu");
  const menuRight = document.querySelector(".menu-right");
  menu.classList.toggle("visible");
  menuRight.classList.toggle("visible");
});
