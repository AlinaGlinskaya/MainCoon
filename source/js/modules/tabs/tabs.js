const tabs = document.querySelector('[data-tabs="parent"]');
const controls = document.querySelectorAll('[data-tabs="control"]');

export class Tabs {
  init() {
    if (tabs) {
      return;
    }
    this._setTabInitialState();
    const tabsControls = tabs.querySelector('[data-tabs="controls"]');
    tabsControls.addEventListener('click', this._openTab.bind(this));
  }

  _setTabInitialState() {
    const tabsItems = tabs.querySelectorAll('[data-tabs="item"]');
    const tabsContent = tabs.querySelector('[data-tabs="content"]');
    const blockHeight = this._returnMaxHeight(tabsItems);
    tabsContent.style.height = `${blockHeight}px`;
  }

  _returnMaxHeight(tabItems) {
    let height = [];
    tabItems.forEach((el) => {
      height.push(el.scrollHeight);
    });
    height.sort();
    return height[height.length - 1];
  }

  _openTab(evt) {
    if (!evt.target.closest('[data-tabs="control"]')) {
      return;
    }
    controls.forEach((control) => {
      control.classList.remove('is-active');
    });
    evt.target.classList.add('is-active');
    const activeIndex = evt.target.dataset.index;
    const activeTab = tabs.querySelector('[data-tabs="item"].is-active');
    const tabToOpen = tabs.querySelector(`[data-tabs="item"][data-index="${activeIndex}"]`);
    activeTab.classList.remove('is-active');
    tabToOpen.classList.add('is-active');
  }
}
