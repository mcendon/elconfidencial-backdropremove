(function removeBackdrop() {
  let modal = document.querySelector('.tp-modal-open');
  
  if (modal === null) {
    setTimeout(removeBackdrop, 100);
  } else {
    modal.classList.remove('tp-modal-open');
    document.querySelector('.tp-modal').remove();
    document.querySelector('.tp-backdrop').remove();
  }
})();

(function restoreScroll() {
  let body = document.querySelector('body');
  if (body === null) {
    setTimeout(restoreScroll, 100);
  } else {
    body.style.overflowY = 'visible'
  }
})();
