
// document.addEventListener('DOMContentLoaded', () => {
//     // Load data from localStorage
//     loadFromLocalStorage();

//     // Handle Login
//     const loginForm = document.getElementById('loginForm');
//     const navbar = document.getElementById('navbar');
//     const loginSection = document.getElementById('loginSection');

//     if (loginForm) {
//         loginForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const username = document.getElementById('username').value;
//             const password = document.getElementById('password').value;

//             // Simple login validation (for demo purposes)
//             if (username === 'admin' && password === 'password') {
//                 loginSection.style.display = 'none';
//                 navbar.style.display = 'flex';
//                 showSection('inventorySection');
//             } else {
//                 alert('Invalid credentials');
//             }
//         });
//     }

//     // Inventory Management
//     const inventoryForm = document.getElementById('inventoryForm');
//     const inventoryList = document.getElementById('inventoryList');
//     if (inventoryForm) {
//         inventoryForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const itemName = document.getElementById('itemName').value;
//             const itemQuantity = document.getElementById('itemQuantity').value;
//             const itemPrice = document.getElementById('itemPrice').value;

//             const li = document.createElement('li');
//             li.innerHTML = `Name: ${itemName}, Quantity: ${itemQuantity}, Price: ${itemPrice}
//                 <button onclick="editItem(this)">Edit</button>
//                 <button onclick="deleteItem(this)">Delete</button>`;
//             inventoryList.appendChild(li);

//             saveToLocalStorage();
//             inventoryForm.reset();
//         });
//     }

//     // Expense Tracker
//     const expenseForm = document.getElementById('expenseForm');
//     const expenseList = document.getElementById('expenseList');
//     if (expenseForm) {
//         expenseForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const expenseDescription = document.getElementById('expenseDescription').value;
//             const expenseAmount = document.getElementById('expenseAmount').value;

//             const li = document.createElement('li');
//             li.innerHTML = `Description: ${expenseDescription}, Amount: ${expenseAmount}
//                 <button onclick="editExpense(this)">Edit</button>
//                 <button onclick="deleteExpense(this)">Delete</button>`;
//             expenseList.appendChild(li);

//             saveToLocalStorage();
//             expenseForm.reset();
//         });
//     }

//     // Dynamic Invoice Generator
//     const invoiceForm = document.getElementById('invoiceForm');
//     const invoiceOutput = document.getElementById('invoiceOutput');
//     const sendInvoiceEmail = document.getElementById('sendInvoiceEmail');
//     const sendInvoiceSms = document.getElementById('sendInvoiceSms');
//     if (invoiceForm) {
//         invoiceForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const customerName = document.getElementById('customerName').value;
//             const customerEmail = document.getElementById('customerEmail').value;
//             const customerPhone = document.getElementById('customerPhone').value;

//             const totalItems = inventoryList.childElementCount;
//             const totalItemPrice = Array.from(inventoryList.children).reduce((acc, li) => acc + parseFloat(li.textContent.split('Price: ')[1]), 0);
//             const totalExpenses = expenseList.childElementCount;
//             const totalExpenseAmount = Array.from(expenseList.children).reduce((acc, li) => acc + parseFloat(li.textContent.split('Amount: ')[1]), 0);

//             const invoiceHTML = `
//                 <h2>Invoice</h2>
//                 <p>Customer Name: ${customerName}</p>
//                 <p>Customer Email: ${customerEmail}</p>
//                 <p>Customer Phone: ${customerPhone}</p>
//                 <p>Total Items: ${totalItems}</p>
//                 <p>Total Item Price: ${totalItemPrice}</p>
//                 <p>Total Expenses: ${totalExpenses}</p>
//                 <p>Total Expense Amount: ${totalExpenseAmount}</p>
//             `;

//             invoiceOutput.innerHTML = invoiceHTML;
//             invoiceForm.reset();

//             sendInvoiceEmail.addEventListener('click', () => {
//                 // Placeholder for sending invoice via email
//                 alert(`Invoice sent to ${customerEmail}`);
//             });

//             sendInvoiceSms.addEventListener('click', () => {
//                 // Placeholder for sending invoice via SMS
//                 alert(`Invoice sent to ${customerPhone}`);
//             });
//         });
//     }

//     // Customer Data Store
//     const customerForm = document.getElementById('customerForm');
//     const customerList = document.getElementById('customerList');
//     if (customerForm) {
//         customerForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const customerName = document.getElementById('customerName').value;
//             const customerEmail = document.getElementById('customerEmail').value;
//             const customerPhone = document.getElementById('customerPhone').value;

//             const li = document.createElement('li');
//             li.innerHTML = `Name: ${customerName}, Email: ${customerEmail}, Phone: ${customerPhone}
//                 <button onclick="editCustomer(this)">Edit</button>
//                 <button onclick="deleteCustomer(this)">Delete</button>`;
//             customerList.appendChild(li);

//             saveToLocalStorage();
//             customerForm.reset();
//         });
//     }

//     // Payment Processing
//     const paymentForm = document.getElementById('paymentForm');
//     const paymentOutput = document.getElementById('paymentOutput');
//     if (paymentForm) {
//         paymentForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const paymentAmount = document.getElementById('paymentAmount').value;
//             const paymentMethod = document.getElementById('paymentMethod').value;

//             paymentOutput.innerHTML = `Payment of ${paymentAmount} processed via ${paymentMethod}.`;
//             paymentForm.reset();
//         });
//     }
// });

// function showSection(sectionId) {
//     const sections = ['inventorySection', 'expensesSection', 'invoiceSection', 'customerDataSection', 'communicationSection', 'paymentSection'];
//     sections.forEach(id => {
//         document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
//     });
// }

// function editItem(button) {
//     const li = button.parentElement;
//     const itemDetails = li.firstChild.textContent.split(', ');
//     const itemName = itemDetails[0].split('Name: ')[1];
//     const itemQuantity = itemDetails[1].split('Quantity: ')[1];
//     const itemPrice = itemDetails[2].split('Price: ')[1];

//     document.getElementById('itemName').value = itemName;
//     document.getElementById('itemQuantity').value = itemQuantity;
//     document.getElementById('itemPrice').value = itemPrice;

//     deleteItem(button);
// }

// function deleteItem(button) {
//     button.parentElement.remove();
//     saveToLocalStorage();
// }

// function editExpense(button) {
//     const li = button.parentElement;
//     const expenseDetails = li.firstChild.textContent.split(', ');
//     const expenseDescription = expenseDetails[0].split('Description: ')[1];
//     const expenseAmount = expenseDetails[1].split('Amount: ')[1];

//     document.getElementById('expenseDescription').value = expenseDescription;
//     document.getElementById('expenseAmount').value = expenseAmount;

//     deleteExpense(button);
// }

// function deleteExpense(button) {
//     button.parentElement.remove();
//     saveToLocalStorage();
// }

// function editCustomer(button) {
//     const li = button.parentElement;
//     const customerDetails = li.firstChild.textContent.split(', ');
//     const customerName = customerDetails[0].split('Name: ')[1];
//     const customerEmail = customerDetails[1].split('Email: ')[1];
//     const customerPhone = customerDetails[2].split('Phone: ')[1];

//     document.getElementById('customerName').value = customerName;
//     document.getElementById('customerEmail').value = customerEmail;
//     document.getElementById('customerPhone').value = customerPhone;

//     deleteCustomer(button);
// }

// function deleteCustomer(button) {
//     button.parentElement.remove();
//     saveToLocalStorage();
// }

// function saveToLocalStorage() {
//     const inventoryList = document.getElementById('inventoryList');
//     const expenseList = document.getElementById('expenseList');
//     const customerList = document.getElementById('customerList');

//     const inventoryData = Array.from(inventoryList.children).map(li => li.firstChild.textContent);
//     const expenseData = Array.from(expenseList.children).map(li => li.firstChild.textContent);
//     const customerData = Array.from(customerList.children).map(li => li.firstChild.textContent);

//     localStorage.setItem('inventoryData', JSON.stringify(inventoryData));
//     localStorage.setItem('expenseData', JSON.stringify(expenseData));
//     localStorage.setItem('customerData', JSON.stringify(customerData));
// }

// function loadFromLocalStorage() {
//     const inventoryList = document.getElementById('inventoryList');
//     const expenseList = document.getElementById('expenseList');
//     const customerList = document.getElementById('customerList');

//     const inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
//     const expenseData = JSON.parse(localStorage.getItem('expenseData')) || [];
//     const customerData = JSON.parse(localStorage.getItem('customerData')) || [];

//     inventoryData.forEach(data => {
//         const li = document.createElement('li');
//         li.innerHTML = `${data}
//             <button onclick="editItem(this)">Edit</button>
//             <button onclick="deleteItem(this)">Delete</button>`;
//         inventoryList.appendChild(li);
//     });

//     expenseData.forEach(data => {
//         const li = document.createElement('li');
//         li.innerHTML = `${data}
//             <button onclick="editExpense(this)">Edit</button>
//             <button onclick="deleteExpense(this)">Delete</button>`;
//         expenseList.appendChild(li);
//     });

//     customerData.forEach(data => {
//         const li = document.createElement('li');
//         li.innerHTML = `${data}
//             <button onclick="editCustomer(this)">Edit</button>
//             <button onclick="deleteCustomer(this)">Delete</button>`;
//         customerList.appendChild(li);
//     });
// }

document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();

    // Handle Login
    const loginForm = document.getElementById('loginForm');
    const navbar = document.getElementById('navbar');
    const loginSection = document.getElementById('loginSection');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === 'password') {
                loginSection.style.display = 'none';
                navbar.style.display = 'flex';
                showSection('inventorySection');
            } else {
                alert('Invalid credentials');
            }
        });
    }

    // Inventory Management
    const inventoryForm = document.getElementById('inventoryForm');
    const inventoryList = document.getElementById('inventoryList');
    if (inventoryForm) {
        inventoryForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const itemName = document.getElementById('itemName').value;
            const itemQuantity = document.getElementById('itemQuantity').value;
            const itemPrice = document.getElementById('itemPrice').value;

            const li = document.createElement('li');
            li.innerHTML = `Name: ${itemName}, Quantity: ${itemQuantity}, Price: ${itemPrice}
                <button onclick="editItem(this)">Edit</button>
                <button onclick="deleteItem(this)">Delete</button>`;
            inventoryList.appendChild(li);

            // Save to localStorage or database
            await saveInventoryToDB({ itemName, itemQuantity, itemPrice });
            inventoryForm.reset();
        });
    }

    // Expense Tracker
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');
    if (expenseForm) {
        expenseForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const expenseDescription = document.getElementById('expenseDescription').value;
            const expenseAmount = document.getElementById('expenseAmount').value;

            const li = document.createElement('li');
            li.innerHTML = `Description: ${expenseDescription}, Amount: ${expenseAmount}
                <button onclick="editExpense(this)">Edit</button>
                <button onclick="deleteExpense(this)">Delete</button>`;
            expenseList.appendChild(li);

            // Save to localStorage or database
            await saveExpenseToDB({ expenseDescription, expenseAmount });
            expenseForm.reset();
        });
    }

    // Dynamic Invoice Generator
    const invoiceForm = document.getElementById('invoiceForm');
    const invoiceOutput = document.getElementById('invoiceOutput');
    const sendInvoiceEmail = document.getElementById('sendInvoiceEmail');
    const sendInvoiceSms = document.getElementById('sendInvoiceSms');
    if (invoiceForm) {
        invoiceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const customerName = document.getElementById('customerName').value;
            const customerEmail = document.getElementById('customerEmail').value;
            const customerPhone = document.getElementById('customerPhone').value;

            // Generate invoice
            const totalItems = inventoryList.childElementCount;
            const totalItemPrice = Array.from(inventoryList.children).reduce((acc, li) => acc + parseFloat(li.textContent.split('Price: ')[1]), 0);
            const totalExpenses = expenseList.childElementCount;
            const totalExpenseAmount = Array.from(expenseList.children).reduce((acc, li) => acc + parseFloat(li.textContent.split('Amount: ')[1]), 0);

            const invoiceHTML = `
                <h2>Invoice</h2>
                <p>Customer Name: ${customerName}</p>
                <p>Customer Email: ${customerEmail}</p>
                <p>Customer Phone: ${customerPhone}</p>
                <p>Total Items: ${totalItems}</p>
                <p>Total Item Price: ${totalItemPrice}</p>
                <p>Total Expenses: ${totalExpenses}</p>
                <p>Total Expense Amount: ${totalExpenseAmount}</p>
            `;

            invoiceOutput.innerHTML = invoiceHTML;
            invoiceForm.reset();

            // Email and SMS
            sendInvoiceEmail.addEventListener('click', async () => {
                await sendEmail({ customerEmail, invoiceHTML });
            });

            sendInvoiceSms.addEventListener('click', async () => {
                await sendSMS({ customerPhone, invoiceHTML });
            });
        });
    }

    // Customer Data Store
    const customerForm = document.getElementById('customerForm');
    const customerList = document.getElementById('customerList');
    if (customerForm) {
        customerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const customerName = document.getElementById('customerName').value;
            const customerEmail = document.getElementById('customerEmail').value;
            const customerPhone = document.getElementById('customerPhone').value;

            const li = document.createElement('li');
            li.innerHTML = `Name: ${customerName}, Email: ${customerEmail}, Phone: ${customerPhone}
                <button onclick="editCustomer(this)">Edit</button>
                <button onclick="deleteCustomer(this)">Delete</button>`;
            customerList.appendChild(li);

            // Save to localStorage or database
            await saveCustomerToDB({ customerName, customerEmail, customerPhone });
            customerForm.reset();
        });
    }

    // Payment Processing
    const paymentForm = document.getElementById('paymentForm');
    const paymentOutput = document.getElementById('paymentOutput');
    if (paymentForm) {
        paymentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const paymentAmount = document.getElementById('paymentAmount').value;
            const paymentMethod = document.getElementById('paymentMethod').value;

            // Process payment
            const paymentResponse = await processPayment({ paymentAmount, paymentMethod });

            paymentOutput.innerHTML = `Payment of ${paymentAmount} processed via ${paymentMethod}. Status: ${paymentResponse.status}`;
            paymentForm.reset();
        });
    }
});

// Utility Functions
async function saveInventoryToDB(item) {
    // Replace with actual API call
    console.log('Saving inventory to DB:', item);
}

async function saveExpenseToDB(expense) {
    // Replace with actual API call
    console.log('Saving expense to DB:', expense);
}

async function sendEmail({ customerEmail, invoiceHTML }) {
    // Replace with actual email sending API call
    console.log('Sending email to:', customerEmail);
}

async function sendSMS({ customerPhone, invoiceHTML }) {
    // Replace with actual SMS sending API call
    console.log('Sending SMS to:', customerPhone);
}

async function saveCustomerToDB(customer) {
    // Replace with actual API call
    console.log('Saving customer to DB:', customer);
}

async function processPayment(payment) {
    // Replace with actual payment processing API call
    console.log('Processing payment:', payment);
    return { status: 'Success' };
}

function showSection(sectionId) {
    const sections = ['inventorySection', 'expensesSection', 'invoiceSection', 'customerDataSection', 'communicationSection', 'paymentSection'];
    sections.forEach(id => {
        document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
    });
}

function loadFromLocalStorage() {
    // Load data from localStorage and populate UI
}

function editItem(button) {
    // Edit item logic
}

function deleteItem(button) {
    // Delete item logic
}

function editExpense(button) {
    // Edit expense logic
}

function deleteExpense(button) {
    // Delete expense logic
}

function editCustomer(button) {
    // Edit customer logic
}

function deleteCustomer(button) {
    // Delete customer logic
}
