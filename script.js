document.addEventListener("DOMContentLoaded", () => {
  const worldSelector = document.getElementById("world-selector");
  const patriciaSite = document.getElementById("patricia-site");
  const picaSite = document.getElementById("pica-site");

  // MUESTRA UNA PÁGINA Y OCULTA LAS DEMÁS
  function openWorld(world) {
    if (world === "patricia") {
      worldSelector.style.display = "none";
      picaSite.style.display = "none";
      patriciaSite.style.display = "block";
    } else if (world === "pica") {
      worldSelector.style.display = "none";
      patriciaSite.style.display = "none";
      picaSite.style.display = "block";
    }
    window.scrollTo(0, 0);
  }

  // VUELVE A LA PANTALLA PRINCIPAL
  function showSplitScreen() {
    patriciaSite.style.display = "none";
    picaSite.style.display = "none";
    worldSelector.style.display = "grid";
    window.scrollTo(0, 0);
  }

  // BOTONES ENTRAR
  document.querySelectorAll("[data-enter]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openWorld(btn.dataset.enter);
    });
  });

  // BOTÓN "VOLVER AL INICIO"
  document.querySelectorAll("[data-home]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showSplitScreen();
    });
  });

 /* ==========================================================================
     LÓGICA DEL PORTFOLIO 3D (GALERÍAS INDIVIDUALES & OCULTACIÓN DE CUERPO)
     ========================================================================== */
  const gridView = document.getElementById("projects-grid-view");
  const detailView = document.getElementById("project-detail-view");
  const backBtns = document.querySelectorAll(".back-to-grid-btn");
  const detailContents = document.querySelectorAll(".project-detail-content");
  const subdetailContents = document.querySelectorAll(".subdetail-content");

  // Elementos del cuerpo a ocultar cuando se abre un proyecto
  const mainSectionsToToggle = document.querySelectorAll(
    ".hero-patricia, .intro-section, .services-section, .skills-section, .experience-section, .awards-section, .contact-section, .portfolio-section > h2, .portfolio-section > .section-label"
  );

  // FUNCIÓN PARA ABRIR UN PROYECTO PRINCIPAL O CATEGORÍA
  function openProjectDetail(projectId) {
    // Oculta las secciones generales de la web
    mainSectionsToToggle.forEach(sec => sec.style.display = "none");
    
    gridView.style.display = "none";
    detailView.style.display = "block";

    detailContents.forEach(content => {
      content.style.display = "none";
    });

    // Resetear subdetalles
    subdetailContents.forEach(sub => sub.style.display = "none");

    const targetDetail = document.getElementById(`detail-${projectId}`);
    if (targetDetail) {
      targetDetail.style.display = "block";

      // Si es una categoría con subproyectos, muestra su rejilla interna
      const subGrid = targetDetail.querySelector(".subprojects-grid");
      if (subGrid) {
        subGrid.style.display = "grid";
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // FUNCIÓN PARA ABRIR UN SUBPROYECTO (DENTRO DE PRODUCTOS O ENVIRONMENT)
  function openSubprojectDetail(subprojectId, categoryId) {
    const parentDetail = document.getElementById(`detail-${categoryId}`);
    if (parentDetail) {
      const subGrid = parentDetail.querySelector(".subprojects-grid");
      if (subGrid) subGrid.style.display = "none";

      subdetailContents.forEach(sub => sub.style.display = "none");

      const targetSubdetail = document.getElementById(`subdetail-${subprojectId}`);
      if (targetSubdetail) {
        targetSubdetail.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }

  // FUNCIÓN PARA VOLVER A LA VISTA GENERAL DEL PORTFOLIO
  function closeProjectDetail() {
    detailView.style.display = "none";
    gridView.style.display = "grid";
    
    // Muestra de nuevo todas las secciones del cuerpo
    mainSectionsToToggle.forEach(sec => sec.style.display = "");

    detailContents.forEach(content => {
      content.style.display = "none";
    });

    subdetailContents.forEach(sub => sub.style.display = "none");

    const workSection = document.getElementById("work-3d");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // EVENTOS PARA LAS TARJETAS DE LA REJILLA PRINCIPAL
  document.querySelectorAll(".project-open-btn").forEach(card => {
    card.addEventListener("click", () => {
      const projectId = card.dataset.project;
      openProjectDetail(projectId);
    });
  });

  // EVENTOS PARA LAS TARJETAS DE SUBPROYECTOS (PRODUCTOS & ENVIRONMENT)
  document.querySelectorAll(".subproject-open-btn").forEach(card => {
    card.addEventListener("click", () => {
      const subprojectId = card.dataset.subproject;
      const parentCategory = card.closest(".project-detail-content").id.replace("detail-", "");
      openSubprojectDetail(subprojectId, parentCategory);
    });
  });

  // BOTONES PARA VOLVER A LA CATEGORÍA PADRE DESDE UN SUBPROYECTO
  document.querySelectorAll(".back-to-category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const parentDetail = btn.closest(".project-detail-content");
      if (parentDetail) {
        subdetailContents.forEach(sub => sub.style.display = "none");
        const subGrid = parentDetail.querySelector(".subprojects-grid");
        if (subGrid) subGrid.style.display = "grid";
      }
    });
  });

  // EVENTOS PARA EL DROPDOWN DEL MENÚ SUPERIOR
  document.querySelectorAll(".project-direct-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = link.dataset.project;
      openProjectDetail(projectId);
    });
  });

  // BOTONES VOLVER AL PORTFOLIO GENERAL
  backBtns.forEach(btn => {
    btn.addEventListener("click", closeProjectDetail);
  });
  
  /* ==========================================================================
     SUBPESTAÑAS SOBRE MÍ (LA MAGA PICA)
     ========================================================================== */
  const subtabBtns = document.querySelectorAll(".subtab-btn");
  const subtabContents = document.querySelectorAll(".subtab-content");

  subtabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      subtabBtns.forEach(b => b.classList.remove("active"));
      subtabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      const targetContent = document.getElementById(`subtab-${btn.dataset.subtab}`);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});
