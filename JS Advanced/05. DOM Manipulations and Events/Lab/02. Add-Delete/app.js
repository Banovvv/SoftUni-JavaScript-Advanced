function addItem() {
    let itemsList = document.getElementById('items');
    let newItemText = document.getElementById('newItemText');

    let listItemElement = document.createElement('li');
    listItemElement.textContent = newItemText.value;

    addDeleteLink(listItemElement);

    itemsList.appendChild(listItemElement);

    newItemText.value = '';
}

function addDeleteLink(element) {
    let deleteElement = document.createElement('a');
    deleteElement.setAttribute('href', '#');
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', event => {
        const target = event.currentTarget.parentNode;
        target.parentNode.removeChild(target)
    });

    element.appendChild(deleteElement);
}

function deleteElement(event) {
    const target = event.currentTarget;
    target.parentNode.removeChild(target);
}