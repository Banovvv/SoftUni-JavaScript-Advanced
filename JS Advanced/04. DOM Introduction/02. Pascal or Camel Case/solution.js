function solve() {
  let input = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let resultContainer = document.getElementById('result');

  resultContainer.textContent = inputToCase(input, namingConvention);
}

function inputToCase(input, namingConvention) {
  let result = [];
  let elements = input.split(' ');

  if (namingConvention === 'Camel Case') {
    for (let i = 0; i < elements.length; i++) {
      elements[i] = elements[i].toLowerCase();

      if (i === 0) {
        result.push(elements[i]);
      } else {
        elements[i] = elements[i].charAt(0).toUpperCase() + elements[i].slice(1);
        result.push(elements[i]);
      }
    }
  } else if (namingConvention === 'Pascal Case') {
    for (let i = 0; i < elements.length; i++) {
      elements[i] = elements[i].toLowerCase();
      elements[i] = elements[i].charAt(0).toUpperCase() + elements[i].slice(1);

      result.push(elements[i]);
    }
  } else {
    result.push('Error!');
  }

  return result.join('');
}