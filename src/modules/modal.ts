export const modal = (): void => {
  const modalElem: HTMLElement = document.querySelector('.modal') as HTMLElement;
  const btnOpen: HTMLElement = document.querySelector('.btn-open') as HTMLElement;
  const btns: NodeListOf<HTMLElement> = document.querySelectorAll('.btn');
  const closeModal: HTMLElement = document.querySelector('.modal-close') as HTMLElement;
  const modalOverlay: HTMLElement = document.querySelector('.modal-overlay') as HTMLElement;

  btns.forEach((btn: Element) => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault()
    })

    btnOpen.addEventListener('click', () => {
      modalElem.style.display = 'block';
      closeModal.focus()
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

    modalOverlay.addEventListener("click", (e) => {
      if (e.target == modalOverlay) {
        modalElem.style.display = 'none';
      }
    })
  })
}
