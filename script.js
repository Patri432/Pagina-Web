document.addEventListener("DOMContentLoaded", () => {
  // ELEMENTOS
  const worldSelector = document.getElementById("world-selector");
  const patriciaSite = document.getElementById("patricia-site");
  const picaSite = document.getElementById("pica-site");

  // NAVEGACIÓN ENTRE MUNDOS
  const enterButtons = document.querySelectorAll("[data-enter]");
  const switchButtons = document.querySelectorAll("[data-switch]");
  const homeButtons = document.querySelectorAll("[data-home]");

  function openWorld(world) {
    if (world === "patricia") {
      worldSelector.style.display = "none";
      patriciaSite.hidden = false;
      picaSite.hidden = true;
      window.scrollTo(0, 0);
    } else if (world === "pica") {
      worldSelector.style.display = "none";
      picaSite.hidden = false;
      patriciaSite.hidden = true;
      window.scrollTo(0, 0);
    }
  }

  function showWorldSelector() {
    patriciaSite.hidden = true;
    picaSite.hidden = true;
    worldSelector.style.display = "flex";
    window.scrollTo(0, 0);
  }

  enterButtons.forEach(btn => {
    btn.addEventListener("click", () => openWorld(btn.dataset.enter));
  });

  switchButtons.forEach(btn => {
    btn.addEventListener("click", () => openWorld(btn.dataset.switch));
  });

  homeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showWorldSelector();
    });
  });

  // PESTAÑAS Y FILTROS DE PROYECTOS
  const categoryTabs = document.querySelectorAll(".category-tab");
  const projectItems = document.querySelectorAll(".project-item");

  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.dataset.filter;

      projectItems.forEach(item => {
        if (filter === "all" || item.dataset.category === filter) {
          item.hidden = false;
        } else {
          item.hidden = true;
        }
      });
    });
  });

  // MODAL DE PROYECTOS (MAPEADO A TUS NOMBRES EXACTOS DE IMAGEN)
  const modal = document.getElementById("project-modal");
  const modalMedia = document.getElementById("modal-media");
  const modalKicker = document.getElementById("modal-kicker");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const closeButtons = document.querySelectorAll("[data-close-modal]");

  const projectData = {
    edificio: {
      kicker: "ENVIRONMENT / 01",
      title: "Edificio residencial",
      desc: "Modelado y visualización arquitectónica detallada.",
      img: "assets/edificio.webp"
    },
    parque: {
      kicker: "ENVIRONMENT / 02",
      title: "Parque urbano",
      desc: "Creación de entorno y elementos de espacio público.",
      img: "assets/parque.png"
    },
    cocina: {
      kicker: "PROPS / 01",
      title: "Cocina",
      desc: "Modelado de mobiliario e interiorismo.",
      img: "assets/cocina-01.png"
    },
    cajon: {
      kicker: "PROPS / 02",
      title: "Cajón y cubertería",
      desc: "Modelado de objetos y detalle fino de producto.",
      img: "assets/cocina-02.png"
    },
    farola: {
      kicker: "PROPS / 03",
      title: "Farola urbana",
      desc: "Modelado de elemento de mobiliario urbano.",
      img: "assets/farola.png"
    }
  };

  document.querySelectorAll(".project-image-button").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.project;
      const data = projectData[key];

      if (data) {
        modalMedia.innerHTML = `<img src="${data.img}" alt="${data.title}">`;
        modalKicker.textContent = data.kicker;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        modal.setAttribute("aria-hidden", "false");
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.setAttribute("aria-hidden", "true");
    });
  });

  // MENÚ MÓVIL
  document.querySelectorAll(".mobile-menu").forEach(btn => {
    btn.addEventListener("click", () => {
      const nav = btn.parentElement.querySelector("nav");
      if (nav) {
        const isExpanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !isExpanded);
        nav.classList.toggle("mobile-open");
      }
    });
  });
});
