// Ampliación de capturas con un <dialog> nativo. Sin dependencias externas.
(function () {
  var dialog = document.getElementById('lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  var image = dialog.querySelector('img');
  var caption = dialog.querySelector('[data-caption]');

  document.querySelectorAll('[data-full]').forEach(function (button) {
    button.addEventListener('click', function () {
      image.src = button.getAttribute('data-full');
      image.alt = button.querySelector('img').alt;
      caption.textContent = button.getAttribute('data-caption') || '';
      dialog.showModal();
    });
  });

  dialog.querySelector('.lightbox-close').addEventListener('click', function () {
    dialog.close();
  });

  // Un clic fuera de la imagen (sobre el fondo) también cierra.
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) dialog.close();
  });
})();
