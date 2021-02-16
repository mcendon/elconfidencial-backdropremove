(function removeBackdrop() {
  let dialog = document.getElementsByTagName("ec-dialog") || document.getElementsByClassName('tp-modal-open');
  
  if (dialog.length == 0) {
    setTimeout(removeBackdrop, 100);
    return;
  }
  
  if (document.getElementsByClassName('tp-modal-open').length > 0)
    document.getElementsByClassName('tp-modal-open')[0].classList.remove('tp-modal-open');
  
  if (document.getElementsByClassName('tp-modal').length > 0)
    document.getElementsByClassName('tp-modal')[0].remove();
  
  if (document.getElementsByClassName('tp-backdrop').length > 0)
    document.getElementsByClassName('tp-backdrop')[0].remove();
  
  if (document.getElementsByTagName("ec-dialog").length > 0)
    document.getElementsByTagName("ec-dialog").item(0).remove();
  
  document.getElementsByTagName("body")[0].style.overflowY = "visible";
})();
