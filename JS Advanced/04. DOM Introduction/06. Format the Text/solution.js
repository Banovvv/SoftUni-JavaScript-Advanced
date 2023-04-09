function solve() {
  let inputText = document.getElementById('input').value;
  let output = document.getElementById('output');

  let paragraphs = inputText
    .split('.')
    .filter(x => x !== '');

  while (paragraphs.length > 0) {
    let paragraph = paragraphs.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = paragraph;
    output.appendChild(p);
  }
}