document.addEventListener('DOMContentLoaded', () => {
  const gridView = document.getElementById('projects-grid-view');
  const detailView = document.getElementById('project-detail-view');
  const openButtons = document.querySelectorAll('.project-open-btn');
  const backButton = document.querySelector('.back-to-grid-btn');
  const detailContents = document.querySelectorAll('.project-detail-content');

  // Abrir vista detallada
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const projectKey = button.getAttribute('data-project');
      const targetDetail = document.getElementById(`detail-${projectKey}`);

      if (targetDetail) {
        // Ocultar la rejilla principal
        gridView.style.display = 'none';

        // Ocultar todos los detalles por seguridad
        detailContents.forEach(content => {
          content.style.display = 'none';
        });

        // Mostrar el contenedor global de detalles y el específico
        detailView.style.display = 'block';
        targetDetail.style.display = 'block';

        // Desplazar al inicio de la sección
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Volver a la rejilla principal
  if (backButton) {
    backButton.addEventListener('click', () => {
      // Detener vídeos que estén en reproducción al salir
      const videos = detailView.querySelectorAll('video');
      videos.forEach(video => video.pause());

      // Ocultar vista de detalles y mostrar la rejilla
      detailView.style.display = 'none';
      detailContents.forEach(content => {
        content.style.display = 'none';
      });

      gridView.style.display = 'grid';
    });
  }
});
