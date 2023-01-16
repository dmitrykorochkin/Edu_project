export const modal = (): void => {
  const modalBlock: HTMLElement = document.querySelector('.modal-block') as HTMLElement;
  const btnOpen: HTMLElement = document.querySelector('.btn-open') as HTMLElement;
  const btnClose: HTMLElement = document.querySelector('.btn-close') as HTMLElement;
  const btns: NodeListOf<HTMLElement> = document.querySelectorAll('.btn');


  btns.forEach((btn: Element) => {
    btn.addEventListener('click', (e: Event) => {
      e.preventDefault()
    })

    btnOpen.addEventListener('click', () => {
      modalBlock.style.display = 'flex';
    })
    btnClose.addEventListener('click', () => {
      modalBlock.style.display = 'none';
    })

    document.addEventListener("keydown", function (e) {
      const key = e.key;
      if (key === "Escape") {
        modalBlock.style.display = 'none';
      }
    });

    // const closeModal = (e: Event) => {
    //   const target = e.target as HTMLElement;
    //   if(target.matches('.modal-block')) {
    //     modalBlock.style.display = 'none';
    //   }
    // }
    
  })
  
}
