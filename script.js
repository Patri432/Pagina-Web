/* =====================================================
   NAVEGACIÓN PRINCIPAL
===================================================== */

function openWorld(world) {

  const home = document.getElementById("home");
  const patricia = document.getElementById("patricia-page");
  const pica = document.getElementById("pica-page");

  home.classList.add("hidden");

  patricia.classList.add("hidden");
  pica.classList.add("hidden");

  if (world === "patricia") {

    patricia.classList.remove("hidden");

    showPatriciaSection("inicio");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  }

  if (world === "pica") {

    pica.classList.remove("hidden");

    showPicaSection("inicio");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  }

}


/* =====================================================
   VOLVER A LOS DOS MUNDOS
===================================================== */

function backHome() {

  const home = document.getElementById("home");
  const patricia = document.getElementById("patricia-page");
  const pica = document.getElementById("pica-page");

  patricia.classList.add("hidden");
  pica.classList.add("hidden");

  home.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


/* =====================================================
   PESTAÑAS PATRICIA
===================================================== */

function showPatriciaSection(section) {

  const sections = [
    "inicio",
    "sobre-mi",
    "experiencia",
    "proyectos",
    "programas",
    "contacto"
  ];

  sections.forEach(function(name) {

    const element = document.getElementById(
      "patricia-" + name
    );

    if (element) {
      element.classList.remove("active");
    }

  });


  const selected = document.getElementById(
    "patricia-" + section
  );

  if (selected) {
    selected.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   PESTAÑAS LA MAGA PICA
===================================================== */

function showPicaSection(section) {

  const sections = [
    "inicio",
    "sobre-mi",
    "espectaculos",
    "contacto"
  ];

  sections.forEach(function(name) {

    const element = document.getElementById(
      "pica-" + name
    );

    if (element) {
      element.classList.remove("active");
    }

  });


  const selected = document.getElementById(
    "pica-" + section
  );

  if (selected) {
    selected.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
