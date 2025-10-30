// let tabsContainer = document.querySelector("#tabs");

// let tabTogglers = document.querySelectorAll("#tabs a");

// tabTogglers.forEach(function(toggler) {
//   toggler.addEventListener("click", function(e) {
//     e.preventDefault();

//     let tabName = this.getAttribute("href");

//     let tabContents = document.querySelector("#tab-contents");

//     for (let i = 0; i < tabContents.children.length; i++) {
      
//       tabTogglers[i].parentElement.classList.remove("border-t", "border-r", "border-l","border-sky-600", "-mb-px", "bg-white"); 
      
//       tabContents.children[i].classList.remove("hidden");
//       if ("#" + tabContents.children[i].id === tabName) {
//         continue;
//       }
//       tabContents.children[i].classList.add("hidden");
      
//     }
//     e.target.parentElement.classList.add("border-t", "border-r", "border-l", "border-sky-600", "-mb-px", "bg-white");
  
//   });
// });
export function deactivateAllTabs(tabTogglers) {
  tabTogglers.forEach(toggler => {
    toggler.parentElement.classList.remove("border-t", "border-r", "border-l","border-sky-600", "-mb-px", "bg-white");
  });
}

export function toggleTabContents(tabContents, activeTabId) {
  for (let i = 0; i < tabContents.children.length; i++) {
    const child = tabContents.children[i];
    if ("#" + child.id === activeTabId) {
      child.classList.remove("hidden");
    } else {
      child.classList.add("hidden");
    }
  }
}

export function activateTab(toggler) {
  toggler.parentElement.classList.add("border-t", "border-r", "border-l", "border-sky-600", "-mb-px", "bg-white");
}

export function initTabs(tabsSelector, contentsSelector) {
  const tabTogglers = document.querySelectorAll(`${tabsSelector} a`);
  const tabContents = document.querySelector(contentsSelector);

  tabTogglers.forEach(toggler => {
    toggler.addEventListener("click", e => {
      e.preventDefault();
      const tabName = toggler.getAttribute("href");

      deactivateAllTabs(tabTogglers);
      toggleTabContents(tabContents, tabName);
      activateTab(toggler);
    });
  });
}
