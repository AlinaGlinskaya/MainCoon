const hoverElements = document.querySelectorAll('.hover');

const isAndroid = () => {
  return navigator.userAgent.match(/Android/i) && 'ontouchstart' in document;
};

const samsungHoverFix = () => {
  if (isAndroid() && hoverElements.length) {
    hoverElements.forEach((el) => {
      el.classList.remove('hover');
    });
  }
};

export {samsungHoverFix};
