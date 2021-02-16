(function removeBackdrop() {
  let modal = document.getElementsByClassName('tp-modal-open');
  let dialog = document.getElementsByTagName('ec-dialog');
  
  if (modal.length == 0) {
    setTimeout(removeBackdrop, 100);
  } else {
    document.getElementsByClassName('tp-modal-open')[0].classList.remove('tp-modal-open');
    document.getElementsByClassName('tp-modal')[0].remove();
    document.getElementsByClassName('tp-backdrop')[0].remove();
  }

  if (dialog.length == 0) {
    setTimeout(removeBackdrop, 100);
  } else {
    document.getElementsByTagName('ec-dialog').item(0).remove();
  }
})();

(function restoreScroll() {
  let body = document.getElementsByTagName('body')[0];
  if (body.length == 0) {
    setTimeout(restoreScroll, 100);
  } else {
    body.style.overflowY = 'visible'
  }
})();
