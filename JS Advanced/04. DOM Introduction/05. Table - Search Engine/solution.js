function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchFor = document.getElementById('searchField').value;
      let elements = document.querySelectorAll('tbody td');

      elements.forEach(element => {
         element.parentElement.classList.remove('select');
      });

      elements.forEach(element => {
         if (element.textContent.toLowerCase().includes(searchFor.toLowerCase())) {
            element.parentElement.classList.add('select');
         }
      });
   }
}