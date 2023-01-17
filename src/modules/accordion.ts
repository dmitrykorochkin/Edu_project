export const accordion = () => {
  const accordions: NodeListOf<HTMLElement> = document.querySelectorAll('.accordion_title');
 

  for(let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function(this: HTMLElement) {
      this.classList.toggle('active');
      const accordionText = (this.nextElementSibling as HTMLElement)
      if(accordionText.style.maxHeight) {
        accordionText.style.maxHeight = null
      } else {
        accordionText.style.maxHeight = accordionText.scrollHeight + 'px'
      }
    })
  }
  
}