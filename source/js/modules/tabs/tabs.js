const tabs = document.querySelector('[data-tabs="parent"]');
const controls = document.querySelector('[data-tabs="controls"]');

export class Tabs {
  init() {
    if (!tabs || !controls) {
      return;
    }
    controls.addEventListener('click', this._openTab.bind(this));
  }

  _returnScopeList(nodeList, parent) {
    const scopeList = [];
    nodeList.forEach((element) => {
      const elementParent = element.closest(tabs);
      if (elementParent === parent) {
        scopeList.push(element);
      }
    });

    return scopeList;
  }

  _returnScopeChild(nodeList, parent) {
    let currentChild;
    nodeList.forEach((element) => {
      const elementParent = element.closest(tabs);
      if (elementParent === parent) {
        currentChild = element;
      }
    });

    return currentChild;
  }

  _returnMaxHeight(tabItems) {
    let height = [];
    tabItems.forEach((el) => {
      height.push(el.scrollHeight);
    });
    height.sort();
    return height[height.length - 1];
  }

  _openTab() {
  }
}
