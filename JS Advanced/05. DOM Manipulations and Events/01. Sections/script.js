function create(words) {
   let contentElement = document.getElementById('content');

   words.forEach(word => {
      let wordElement = document.createElement('div');
      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = "none";

      wordElement.appendChild(paragraphElement);
      wordElement.addEventListener('click', event => {
         paragraphElement.style.display = "block";
      });

      contentElement.appendChild(wordElement);
   });
}