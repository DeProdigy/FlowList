function showOverlay() {
  $('body').append( overlayTemplate() );
}

function closeOverlay() {
  $('.overlay').remove();
}