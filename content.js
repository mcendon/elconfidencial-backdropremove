(function removeBackdrop() {
  if (document.getElementsByClassName('tp-modal-open').length == 0) {
    setTimeout(removeBackdrop, 100);
    return;
  }
  document.getElementsByClassName('tp-modal-open')[0].classList.remove('tp-modal-open');
  document.getElementsByClassName('tp-modal')[0].remove();
  document.getElementsByClassName('tp-backdrop')[0].remove();
})();