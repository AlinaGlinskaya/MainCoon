const accordions = document.querySelectorAll('[data-accordion="parent"]');

export class Accordions {
  init() {
    if (!accordions.length) {
      return;
    }

    accordions.forEach((el) => {
      this.initAccordion(el);
    });
  }

  initAccordion(accordion) {
    const accordionButtons = accordion.querySelectorAll('[data-accordion="button"]');
    accordionButtons.forEach((btn) => {
      btn.addEventListener('click', (evt) => {
        const accordionElement = evt.target.closest('[data-accordion="element"]');
        if (accordionElement.classList.contains('is-active')) {
          this.closeAccordion(accordionElement);
        } else {
          this.openAccordion(accordionElement);
        }
      });
    });
  }

  openAccordion(element) {
    element.classList.add('is-active');
  }

  closeAccordion(element) {
    element.classList.remove('is-active');
  }
}
