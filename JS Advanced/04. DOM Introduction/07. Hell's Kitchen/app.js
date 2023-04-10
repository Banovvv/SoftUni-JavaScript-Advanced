function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let restaurants = [];

      input.forEach(element => {
         restaurantParts = element.split(' - ');
         restourantEmployees = restaurantParts[1].split(', ');

         let restaurant = {
            name: restaurantParts[0],
            averageSalary: 0,
            maxSalary: 0,
            employees: []
         }

         restourantEmployees.forEach(element => {
            restaurant.employees.push({
               name: element.split(' ')[0],
               salary: Number(element.split(' ')[1])
            });
         });

         averageSalary = 0

         restaurant.employees.forEach(element => {
            averageSalary += element.salary;
         });

         restaurant.averageSalary = averageSalary / restaurant.employees.length;

         restaurant.maxSalary = Math.max(...restaurant.employees
            .map(element => element.salary));

         restaurants.push(restaurant);
      });

      let bestRestaurant = restaurants
         .sort((a, b) => b.averageSalary - a.averageSalary)[0];

      bestRestaurant.employees.sort((a, b) => b.salary - a.salary);

      employeeInfo = '';

      bestRestaurant.employees.forEach(element => {
         employeeInfo += `Name: ${element.name} With Salary: ${element.salary}\n`;
      });

      document.querySelector('#bestRestaurant p').textContent = 
         `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.maxSalary.toFixed(2)}`;

      document.querySelector('#workers p').textContent = employeeInfo;
   }
}