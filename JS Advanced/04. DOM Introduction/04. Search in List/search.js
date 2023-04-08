function search() {
   let matches = 0;
   let result = document.getElementById('result');
   let towns = document.querySelectorAll('#towns li');
   let searchFor = document.querySelector('#searchText').value;

   towns.forEach(town => {
      if (town.textContent.startsWith(searchFor)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';;
         matches++;
      }
   });

   result.textContent = `${matches} mathes found`;
}
