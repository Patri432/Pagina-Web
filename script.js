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

  // BOTONES ENTRAR (ENTRAR A PATRICIA / ENTRAR A LA MAGA PICA)
  document.querySelectorAll("[data-enter]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openWorld(btn.dataset.enter);
    });
  });

  // BOTÓN "VOLVER AL INICIO" (CABECERA Y PIE DE PÁGINA)
  document.querySelectorAll("[data-home]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showSplitScreen();
    });
  });

  // FILTROS DE PORTFOLIO 3D (PATRICIA)
  const categoryTabs = document.querySelectorAll(".category-tab");
  const projectItems = document.querySelectorAll(".project-item");

  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.dataset.filter;
      projectItems.forEach(item => {
        if (filter === "all" || item.dataset.category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // SUBPESTAÑAS DE SOBRE MÍ (LA MAGA PICA / ESCULTURA / FOTOGRAFÍA)
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
