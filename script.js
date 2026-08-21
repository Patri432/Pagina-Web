document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     LÓGICA DEL PORTFOLIO 3D (GALERÍAS INDIVIDUALES & OCULTACIÓN DE CUERPO)
     ========================================================================== */
  const gridView = document.getElementById("projects-grid-view");
  const detailView = document.getElementById("project-detail-view");
  const backBtns = document.querySelectorAll(".back-to-grid-btn");
  const detailContents = document.querySelectorAll(".project-detail-content");

  // Elementos de la página a ocultar/mostrar
  const mainSectionsToToggle = document.querySelectorAll(
    ".hero-patricia, .intro-section, .services-section, .skills-section, .experience-section, .awards-section, .contact-section, .portfolio-section > .container > h2, .portfolio-section > .container > .section-label"
  );

  /**
   * Abre un proyecto específico en detalle y oculta el resto de la página web.
   * @param {string} projectId - Identificador único del proyecto (ej: 'vareia', 'teatro')
   */
  function openProjectDetail(projectId) {
    // 1. Ocultar todas las secciones principales del cuerpo
    mainSectionsToToggle.forEach(sec => {
      sec.style.display = "none";
    });

    // 2. Ocultar la rejilla de proyectos y mostrar el contenedor de detalle
    if (gridView) gridView.style.display = "none";
    if (detailView) detailView.style.display = "block";

    // 3. Ocultar todos los sub-detalles
    detailContents.forEach(content => {
      content.style.display = "none";
    });

    // 4. Mostrar únicamente el detalle seleccionado
    const targetDetail = document.getElementById(`detail-${projectId}`);
    if (targetDetail) {
      targetDetail.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  /**
   * Vuelve a la vista general mostrando todas las secciones de la web y la rejilla.
   */
  function closeProjectDetail() {
    // 1. Ocultar el visor de detalle
    if (detailView) detailView.style.display = "none";
    
    // 2. Mostrar la rejilla principal de proyectos
    if (gridView) gridView.style.display = "grid";

    // 3. Restaurar la visibilidad de todas las secciones del cuerpo
    mainSectionsToToggle.forEach(sec => {
      sec.style.display = "";
    });

    // 4. Resetear el estado interno de los contenidos de detalle
    detailContents.forEach(content => {
      content.style.display = "none";
    });

    // 5. Hacer scroll de vuelta a la sección de proyectos 3D
    const workSection = document.getElementById("work-3d");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // --- EVENT LISTENERS ---

  // Clic en las tarjetas de la rejilla principal
  document.querySelectorAll(".project-open-btn").forEach(card => {
    card.addEventListener("click", () => {
      const projectId = card.dataset.project;
      openProjectDetail(projectId);
    });
  });

  // Clic en las opciones del menú desplegable de la barra superior (Navbar)
  document.querySelectorAll(".project-direct-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = link.dataset.project;
      openProjectDetail(projectId);
    });
  });

  // Clic en los botones "Volver a todos los proyectos"
  backBtns.forEach(btn => {
    btn.addEventListener("click", closeProjectDetail);
  });
});
