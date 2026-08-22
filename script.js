// Abrir vista individual de subproyecto (Luminis, Bolo, etc.)
function openSubprojectDetail(subprojectId, categoryId) {
  const parentDetail = document.getElementById(`detail-${categoryId}`);
  
  if (parentDetail) {
    // 1. Ocultar la portada/grid de la categoría
    const categoryMain = parentDetail.querySelector(".category-main-view");
    if (categoryMain) categoryMain.style.display = "none";

    // 2. Ocultar todos los demás subdetalles por si acaso
    document.querySelectorAll(".subdetail-content").forEach(sub => sub.style.display = "none");

    // 3. Mostrar únicamente la pantalla del subproyecto seleccionado
    const targetSubdetail = document.getElementById(`subdetail-${subprojectId}`);
    if (targetSubdetail) {
      targetSubdetail.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}

// Volver a la categoría padre (Productos) desde la vista de Luminis
function backToCategory(categoryId) {
  const parentDetail = document.getElementById(`detail-${categoryId}`);
  if (parentDetail) {
    // Ocultar subdetalles
    document.querySelectorAll(".subdetail-content").forEach(sub => sub.style.display = "none");
    
    // Volver a mostrar la vista principal de la categoría
    const categoryMain = parentDetail.querySelector(".category-main-view");
    if (categoryMain) categoryMain.style.display = "block";
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Escuchadores de eventos para los subproyectos
document.querySelectorAll(".subproject-open-btn").forEach(card => {
  card.addEventListener("click", () => {
    const subprojectId = card.dataset.subproject;
    const parentCategory = card.closest(".project-detail-content").id.replace("detail-", "");
    openSubprojectDetail(subprojectId, parentCategory);
  });
});

document.querySelectorAll(".back-to-category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const categoryId = btn.dataset.category;
    backToCategory(categoryId);
  });
});
