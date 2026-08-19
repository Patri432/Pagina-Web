document.addEventListener("DOMContentLoaded", () => {
  const worldSelector = document.getElementById("world-selector");
  const patriciaSite = document.getElementById("patricia-site");
  const picaSite = document.getElementById("pica-site");

  // CAMBIO ENTRE PANTALLA DIVIDIDA Y LAS SITES
  function openWorld(world) {
    if (world === "patricia") {
      worldSelector.style.display = "none";
      patriciaSite.hidden = false;
      picaSite.hidden = true;
    } else if (world === "pica") {
      worldSelector.style.display = "none";
      picaSite.hidden = false;
      patriciaSite.hidden = true;
    }
    window.scrollTo(0, 0);
  }

  function showSplitScreen() {
    patriciaSite.hidden = true;
    picaSite.hidden = true;
    worldSelector.style.display = "grid";
    window.scrollTo(0, 0);
  }

  // BOTONES DE ENTRADA Y CAMBIO
  document.querySelectorAll("[data-enter]").forEach(btn => {
    btn.addEventListener("click", () => openWorld(btn.dataset.enter));
  });

  document.querySelectorAll("[data-switch]").forEach(btn => {
    btn.addEventListener("click", () => openWorld(btn.dataset.switch));
  });

  document.querySelectorAll("[data-home]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showSplitScreen();
    });
  });

  // PESTAÑAS DENTRO DE LA MAGA PICA
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".pica-tab-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.tab;

      tabButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      const activeContent = document.getElementById(targetId);
      if (activeContent) {
        activeContent.classList.add("active");
      }
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
});
