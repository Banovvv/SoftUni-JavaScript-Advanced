function sumTable() {
    let sumCell = document.getElementById('sum');

    if (sumCell.textContent === '') {
        let prices = document.querySelectorAll('td');
        let sum = 0;

        for (let i = 1; i < prices.length; i += 2) {
            const element = prices[i];
            sum += Number(element.textContent);
        }

        sumCell.textContent = sum;
    } else { // Extra stuff
        alert('The sum is already calculated');
    }
}