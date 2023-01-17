export const accordion = () => {
  const accordions: NodeListOf<HTMLElement> = document.querySelectorAll('.accordion_title');
 

  for(let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function(this: HTMLElement) {
      this.classList.toggle('active');
      const accordionText = (this.nextElementSibling as HTMLElement)
      if(accordionText.style.display === 'block') {
        accordionText.style.display = 'none'
      } else {
        accordionText.style.display = 'block'
      }
    })
  }
  
}