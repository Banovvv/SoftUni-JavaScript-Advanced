function generateReport() {
    let columns = document.querySelectorAll('input');
    let rows = document.querySelectorAll('tbody tr');

    let employees = [];
    let checkedColumns = [];

    for (let i = 0; i < columns.length; i++) {
        if (columns[i].checked) {
            checkedColumns.push(i);
        }
    }

    for (let i = 0; i < rows.length; i++) {
        let employee = {};
        let employeeParts = rows[i].children;

        checkedColumns.forEach(index => {
            let key = columns[index].name.toLowerCase();
            let value = employeeParts[index].textContent;

            employee[key] = value;
        });

        employees.push(employee);
    }

    document.getElementById('output').textContent = JSON.stringify(employees);
}
