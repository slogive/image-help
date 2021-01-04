function ImageZoom() {
  const Container = document.querySelector('.Image_Container');
  const Image = document.querySelector('.Image');

  Container.classList.toggle('Disable');
  Container.classList.toggle('Active');
  Image.classList.toggle('Disable');
  Image.classList.toggle('Active');

  /* Bloquea el scroll en todo el sitio */
  document.body.classList.toggle('Active');
}

function CloseZoomFromDiv() {
  ImageZoom();
}
