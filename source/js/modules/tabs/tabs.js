const tabs = document.querySelectorAll('[data-tabs="parent"]');
const controls = document.querySelectorAll('[data-tabs="control"]');

export class Tabs {
  constructor() {
    this._openTab = this._openTab.bind(this);
  }

  init() {
    if (!tabs || !controls.length) {
      return;
    }
    tabs.forEach((tab) => {
      this._initTab(tab);
    });
  }

  _resizeObserver() {
    return new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target.classList.contains('is-active')) {
          this._updateTabHeight();
        }
      }
    });
  }

  _returnClosestList(nodeList, parent) {
    const closestList = [];
    nodeList.forEach((element) => {
      const elementParent = element.closest('[data-tabs="parent"]');
      if (elementParent === parent) {
        closestList.push(element);
      }
    });

    return closestList;
  }

  _returnClosestChild(nodeList, parent) {
    let currentChild;
    nodeList.forEach((element) => {
      const elementParent = element.closest('[data-tabs="parent"]');
      if (elementParent === parent) {
        currentChild = element;
      }
    });

    return currentChild;
  }

  _returnMaxHeight(tabElements) {
    let height = [];
    tabElements.forEach((el) => {
      height.push(el.scrollHeight);
    });
    height.sort();
    return height[height.length - 1];
  }

  _returnActiveIndex(tabControlElements) {
    let activeIndex = 0;
    let flag = true;
    tabControlElements.forEach((el, index) => {
      if (el.classList.contains('is-active') && flag) {
        activeIndex = index;
        flag = false;
      }
    });

    return activeIndex;
  }

  _removeAllActiveClasses(tabControlElements, tabElements) {
    tabControlElements.forEach((el, index) => {
      el.classList.remove('is-active');
      el.setAttribute('data-index', index);
    });
    tabElements.forEach((el) => {
      el.classList.remove('is-active');
    });
  }

  _setTabStartState(tabContentElement, tabControlElements, tabElements) {
    const activeIndex = this._returnActiveIndex(tabControlElements);
    const blockHeight = this._returnMaxHeight(tabElements);
    this._removeAllActiveClasses(tabControlElements, tabElements);
    tabControlElements[activeIndex].classList.add('is-active');
    tabElements[activeIndex].classList.add('is-active');
    tabContentElement.style.height = blockHeight + 'px';
  }

  _initTab(tab) {
    const tabContentElement = tab.querySelector('[data-tabs="content"]');
    const tabControlElements = this._returnClosestList(tab.querySelectorAll('[data-tabs="control"]'), tab);
    const tabElements = this._returnClosestList(tab.querySelectorAll('[data-tabs="element"]'), tab);
    this._setTabStartState(tabContentElement, tabControlElements, tabElements);
    controls.forEach((control) => {
      control.addEventListener('click', this._openTab);
    });
    tabElements.forEach((element) => {
      this._resizeObserver().observe(element);
    });
  }

  _openTab(evt) {
    const control = evt.target;
    if (!control.dataset.tabs === 'control' || control.classList.contains('is-active')) {
      return;
    }
    const currentIndex = control.dataset.index;
    const parentElement = control.closest('[data-tabs="parent"]');
    const tabElements = this._returnClosestList(parentElement.querySelectorAll('[data-tabs="element"]'), parentElement);
    const activeTabElement = this._returnClosestChild(parentElement.querySelectorAll('[data-tabs="element"].is-active'), parentElement);
    const activeControl = this._returnClosestChild(parentElement.querySelectorAll('[data-tabs="control"].is-active'), parentElement);
    activeTabElement.classList.remove('is-active');
    activeControl.classList.remove('is-active');
    control.classList.add('is-active');
    tabElements[currentIndex].classList.add('is-active');
  }

  _updateTabHeight() {
    const activeTab = document.querySelector('[data-tabs="element"].is-active');
    const parentElement = activeTab.closest('[data-tabs="parent"]');
    const contentElement = this._returnClosestChild(parentElement.querySelectorAll('[data-tabs="content"]'), parentElement);
    const tabElements = this._returnClosestList(parentElement.querySelectorAll('[data-tabs="element"]'), parentElement);
    contentElement.style.height = this._returnMaxHeight(tabElements) + 'px';
  }
}
