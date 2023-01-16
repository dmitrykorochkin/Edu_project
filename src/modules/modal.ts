export const modal = (): void => {
  const modalElem: HTMLElement = document.querySelector('.modal') as HTMLElement;
  const btnOpen: HTMLElement = document.querySelector('.btn-open') as HTMLElement;
  const btns: NodeListOf<HTMLElement> = document.querySelectorAll('.btn');
  const closeModal: HTMLElement = document.querySelector('.modal-close') as HTMLElement;

  btns.forEach((btn: Element) => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault()
    })

    btnOpen.addEventListener('click', () => {
      modalElem.style.display = 'block';
    })
    closeModal.addEventListener('click', () => {
      modalElem.style.display = 'none';
    })

    document.addEventListener("keydown", function (e) {
      const key = e.key;
      if (key === "Escape") {
        modalElem.style.display = 'none';
      }
    });

    // const hiddenModal = (e: Event) => {
    //   const target = e.target as HTMLElement;
    //   if(target.closest('.modal')) {
    //     modalElem.style.display = 'none';
    //   }
    // }
   
  })
  
}
