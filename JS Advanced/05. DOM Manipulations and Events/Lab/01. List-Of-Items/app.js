function addItem() {
    let itemsList = document.getElementById('items');
    let newItemText = document.getElementById('newItemText');

    let listItemElement = document.createElement('li');
    listItemElement.textContent = newItemText.value;
    itemsList.appendChild(listItemElement);

    newItemText.value = '';
}