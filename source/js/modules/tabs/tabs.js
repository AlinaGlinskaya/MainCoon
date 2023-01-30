const tabs = document.querySelectorAll('[data-tabs="parent"]');

export class Tabs {
  constructor() {
    this._openTab = this._openTab.bind(this);
  }

  init() {
    if (!tabs) {
      return;
    }
    tabs.forEach((tab) => {
      this._initTab(tab);
    });
  }

  reInit() {
    this.init();
  }

  _returnScopeList(nodeList, parent) {
    const scopeList = [];
    nodeList.forEach((element) => {
      const elementParent = element.closest('[data-tabs="parent"]');
      if (elementParent === parent) {
        scopeList.push(element);
      }
    });

    return scopeList;
  }

  _returnScopeChild(nodeList, parent) {
    let currentChild;
    nodeList.forEach((element) => {
      const elementParent = element.closest('[data-tabs="parent"]');
      if (elementParent === parent) {
        currentChild = element;
      }
    });

    return currentChild;
  }

  _returnActiveIndex(tabControlElements) {
    let activeIndex = 0;
    let flag = true;
    tabControlElements.forEach((control, index) => {
      if (control.classList.contains('is-active') && flag) {
        activeIndex = index;
        flag = false;
      }
    });

    return activeIndex;
  }

  _removeAllActiveClasses(tabControlElements, tabItems) {
    tabControlElements.forEach((el, index) => {
      el.classList.remove('is-active');
      el.setAttribute('data-index', index);
    });
    tabItems.forEach((item) => {
      item.classList.remove('is-active');
    });
  }

  _returnMaxHeight(tabItems) {
    let height = [];
    tabItems.forEach((el) => {
      height.push(el.scrollHeight);
    });
    height.sort();
    return height[height.length - 1];
  }

  _setTabStartState(tab, dataHeight, tabItems, tabContentElement, tabControlElements) {
    const activeIndex = this._returnActiveIndex(tabControlElements);
    this._removeAllActiveClasses(tabControlElements, tabItems);
    tab.classList.add('no-transition');
    tabControlElements[activeIndex].classList.add('is-active');
    tabItems[activeIndex].classList.add('is-active');
    const blockHeight = dataHeight === 'max' ? this._returnMaxHeight(tabItems) : tabItems[activeIndex].scrollHeight;
    tabContentElement.style.height = `${blockHeight}px`;
    tabControlElements.forEach((el) => {
      el.addEventListener('click', this._openTab);
    });
  }

  _initTab(tab) {
    const dataHeight = tab.dataset.height;
    const tabContentElement = tab.querySelector('[data-tabs="content"]');
    const tabControlElements = this._returnScopeList(tab.querySelectorAll('[data-tabs="control"]'), tab);
    const tabItems = this._returnScopeList(tab.querySelectorAll('[data-tabs="item"]'), tab);
    this._setTabStartState(tab, dataHeight, tabItems, tabContentElement, tabControlElements);
  }

  _openTab(evt) {
    const control = evt.target;
    if (control.classList.contains('is-active')) {
      return;
    }
    const parentElement = control.closest('[data-tabs="parent"]');
    const currentIndex = control.dataset.index;
    const contentElement = parentElement.querySelector('[data-tabs="content"]');
    const dataHeight = parentElement.dataset.height;
    const tabElements = this._returnScopeList(parentElement.querySelectorAll('[data-tabs="item"]'), parentElement);
    const activeControl = this._returnScopeChild(parentElement.querySelectorAll('[data-tabs="control"].is-active'), parentElement);
    const activeElement = this._returnScopeChild(parentElement.querySelectorAll('[data-tabs="item"].is-active'), parentElement);
    const newHeight = tabElements[currentIndex].scrollHeight;

    if (activeControl) {
      activeControl.classList.remove('is-active');
    }

    if (activeElement) {
      activeElement.classList.remove('is-active');
    }

    if (dataHeight !== 'max') {
      contentElement.style.height = newHeight + 'px';
    }

    tabElements[currentIndex].classList.add('is-active');
    control.classList.add('is-active');
  }
}
