let totalIncome = 0;
let totalExpense = 0;

function addTransaction(type) {
    const description = document.getElementById('description').value.trim();    
    const amount = parseFloat(document.getElementById('amount').value);

    if (!description || isNaN(amount) || amount <= 0) {
        alert('Please provide valid inputs.');
        return;
    }

    if (type === 'Income') {
        totalIncome += amount;
    } else {
        totalExpense += amount;
    }

    const totalElement = document.getElementById('remain-amount');
    totalElement.textContent = totalIncome - totalExpense;

    const tableBody = document.getElementById('transactions-body');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${description}</td>
        <td>${amount.toFixed(2)}</td>
        <td>${type}</td>
    `;
    tableBody.appendChild(newRow);

    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}
