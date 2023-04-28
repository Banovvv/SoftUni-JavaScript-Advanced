function solve() {
  let tableBody = document.querySelector('tbody');
  let buttons = document.querySelectorAll('button');
  let textAreas = document.querySelectorAll('textarea');

  buttons[0].addEventListener('click', generateEvent);
  buttons[1].addEventListener('click', buyEvent);

  let boughtItems = [];
  let totalFactor = 0;
  let sum = 0;

  function generateEvent(event) {
    let elements = JSON.parse(textAreas[0].value);

    elements.forEach(element => {
      let rowElement = document.createElement('tr');

      let imageCol = document.createElement('td');
      let imageElement = document.createElement('img');
      imageElement.setAttribute('src', element.img);
      imageCol.appendChild(imageElement);

      let nameCol = document.createElement('td');
      let nameElement = document.createElement('p');
      nameElement.textContent = element.name;
      nameCol.appendChild(nameElement);

      let priceCol = document.createElement('td');
      let priceElement = document.createElement('p');
      priceElement.textContent = element.price;
      priceCol.appendChild(priceElement);

      let factorCol = document.createElement('td');
      let factorElement = document.createElement('p');
      factorElement.textContent = element.decFactor;
      factorCol.appendChild(factorElement);

      let checkBoxCol = document.createElement('td');
      let checkBoxElement = document.createElement('input');
      checkBoxElement.setAttribute('type', 'checkbox');

      rowElement.appendChild(imageCol);
      rowElement.appendChild(nameCol);
      rowElement.appendChild(priceCol);
      rowElement.appendChild(factorCol);
      rowElement.appendChild(checkBoxElement);

      tableBody.appendChild(rowElement);
    });
  }

  function buyEvent(event) {
    let checkedItems = Array
      .from(document.querySelectorAll('input[type="checkbox"]'))
      .filter(x => x.checked)

    checkedItems.forEach(checkBox => {
      let element = [...checkBox.parentElement.querySelectorAll('p')];

      boughtItems.push(element[0].textContent);
      sum += Number(element[1].textContent);
      totalFactor += Number(element[2].textContent);
    });

    textAreas[1].value = `Bought furniture: ${boughtItems.join(', ')}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${totalFactor / boughtItems.length}`
  }
}