document.addEventListener("DOMContentLoaded", () => {
  const lostForm = document.getElementById("lostForm");
  const foundForm = document.getElementById("foundForm");

  const showMessage = (form, message) => {
    const existing = form.querySelector(".result-msg");
    if (existing) existing.remove();

    const note = document.createElement("div");
    note.className = "result-msg";
    note.textContent = message;
    note.style.marginTop = "0.5rem";
    note.style.padding = "0.85rem 1rem";
    note.style.borderRadius = "12px";
    note.style.background = "#eafaf3";
    note.style.color = "#0d6d4b";
    note.style.fontWeight = "600";
    form.appendChild(note);
  };

  lostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(lostForm);
    const type = formData.get("documentType");
    const zone = formData.get("lossZone");

    showMessage(
      lostForm,
      `Pedido de procura registado para ${type || "documento"} na zona de ${zone || "local informado"}. Uma possível correspondência será avaliada internamente.`
    );

    lostForm.reset();
  });

  foundForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(foundForm);
    const type = formData.get("foundDocumentType");
    const zone = formData.get("foundZone");

    showMessage(
      foundForm,
      `Documento encontrado (${type || "tipo não indicado"}) na zona de ${zone || "local informado"} foi registado com segurança. A fotografia permanece privada.`
    );

    foundForm.reset();
  });
});
