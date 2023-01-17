export const accordion = () => {
  const accordions: NodeListOf<HTMLElement> = document.querySelectorAll('.accordion_title');
 

    accordions.forEach(acc => {
      acc.addEventListener('click', function(this: HTMLElement) {
        this.classList.toggle('active');
        const accordionText: HTMLElement = (this.nextElementSibling as HTMLElement)
        if(accordionText.style.maxHeight)  {
          (accordionText as HTMLElement).style.maxHeight = ''
        } else {
          accordionText.style.maxHeight = `${accordionText.scrollHeight}px`
        }
      })
    })
  
  
}


