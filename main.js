function addDom (tag, newInfo, newClass) {
    const newElement = document.createElement(tag)
    newElement.textContent = newInfo
     if (newClass) {
         newElement.classList = newClass
     }
     return newElement
 }