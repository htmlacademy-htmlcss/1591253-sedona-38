const catalogView = document.querySelector('.catalog-view');
const openModalButton = document.querySelector('.call-to-action-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

if(openModalButton){
    openModalButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.remove('modal--close');
    })
}

if(closeButton){
  closeButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      modal.classList.add('modal--close');
  })
}
