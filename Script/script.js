let total = 0;

function expenseRow(expense,amount) {
    return `<tr>
        <td>${expense}</td>
        <td class="amount">${amount}</td>
        <td> <button class="delete-btn">Delete</button> </td>
    </tr>`
}

function addExpense()
{
    const expenseInput = $("#expense-name");
    const amountInput = $("#expense-amount");
    const expenseList = $("#expense-list");
    
    if (expenseInput.val().trim() === "") return;
    
    const expenseItem = $(expenseRow(expenseInput.val(),amountInput.val()))
    
    
    expenseItem.find(".delete-btn").click(function () {

        expenseItem.remove()
    })
    
    expenseList.append(expenseItem)
    
    updateTotal();
    expenseInput.val("");
    amountInput.val("");
    
}

function updateTotal() {
    const amountInput = $("#expense-amount");
    total = parseInt(amountInput.val())+ total
    $("#total-amount").text(total)

}

$(document).ready(function () {
    
    const addButton = $("#add-expense-btn");
    addButton.click(addExpense);
    addButton.click(updateTotal);

    $("#expense-name").keyup(function (event) {
        if (event.keyCode === 13) {
            addExpense()
        }
    })
    $("#expense-amount").keyup(function (event) {
        if (event.keyCode === 13) {
            addExpense()
        }
    })
})