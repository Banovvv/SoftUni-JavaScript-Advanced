function solve() {
   let textArea = document.querySelector('textarea');

   const buttons = document.querySelectorAll('.add-product');
   buttons.forEach(x => x.addEventListener('click', clickEvent));

   const btnCheckOut = document.querySelector('button.checkout');
   btnCheckOut.addEventListener('click', clickCheckOutEvent)

   let sum = 0;
   const list = [];

   function clickEvent(event) {
      const name = event.target.parentElement.parentElement
         .querySelector('.product-title').textContent;
      const price = Number(event.target.parentElement.parentElement
         .querySelector('.product-line-price').textContent);

      sum += price;

      if (!list.includes(name)) {
         list.push(name);
      }

      const output = `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      textArea.value += output;
   }


   function clickCheckOutEvent() {
      textArea.value += `You bought ${list.join(', ')} for ${sum.toFixed(2)}.`
      buttons.forEach(x => x.removeEventListener('click', clickEvent));
      btnCheckOut.removeEventListener('click', clickCheckOutEvent)
   }
}