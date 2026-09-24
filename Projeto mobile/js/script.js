document.addEventListener("DOMContentLoaded", () => {
  // Navegação inferior
  document.querySelectorAll(".nav-item[data-page]").forEach((item) => {
    item.addEventListener("click", () => {
      const page = item.dataset.page;
      if (page) window.location.href = page;
    });
  });

  // Feedback simples ao confirmar uma dose
  const confirmButton = document.querySelector(".confirm");
  if (confirmButton) {
    confirmButton.addEventListener("click", () => {
      confirmButton.textContent = "✓  Dose confirmada!";
      confirmButton.style.background = "#087f65";
    });
  }

  // Botão de cadastrar (exemplo)
  const addButton = document.querySelector(".add-button");
  if (addButton) {
    addButton.addEventListener("click", () => {
      alert("Aqui você pode abrir o formulário para cadastrar um novo remédio.");
    });
  }
});
