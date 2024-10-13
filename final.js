const milkValue = 130;
const gheeValue = 950;
const dahiValue = 130;
const paneerValue = 900;

let subtotal = 0;
let confirmedQuantities = {
    Milk: 0,
    Ghee: 0,
    Dhai: 0,
    Paneer: 0
};

// Function to clear subtotal when input changes
function clearSubtotal() {
    subtotal = Object.keys(confirmedQuantities).reduce((acc, product) => {
        switch (product) {
            case 'Milk':
                return acc + confirmedQuantities[product] * milkValue;
            case 'Ghee':
                return acc + confirmedQuantities[product] * gheeValue;
            case 'Dhai':
                return acc + confirmedQuantities[product] * dahiValue;
            case 'Paneer':
                return acc + confirmedQuantities[product] * paneerValue;
            default:
                return acc;
        }
    }, 0);
    updateDisplay(); 
}

// Function to handle checkbox selection and toggle button text
function selectProduct(product) {
    const isChecked = document.querySelector(`.${product}`).checked;
    const button = document.getElementById(`${product}-btn`);

    if (!isChecked) {
        confirmedQuantities[product] = 0; // Reset quantity if unchecked
        button.innerText = 'Conform';// Revert button text to 'Conform'
        button.style.color="black"  
    }
    clearSubtotal(); 
}

// Function to get the quantity from input fields
function getQuantity(product) {
    switch (product) {
        case 'Milk':
            return parseFloat(document.querySelector(".litre").value) || 0;
        case 'Ghee':
            return parseFloat(document.querySelector(".kg").value) || 0;
        case 'Dhai':
            return parseFloat(document.querySelector(".litre2").value) || 0;
        case 'Paneer':
            return parseFloat(document.querySelector(".kg2").value) || 0;
        default:
            return 0;
    }
}

// Function to confirm the quantity of the selected product and toggle button text
function confirmQuantity(product) {
    const isChecked = document.querySelector(`.${product}`).checked;
    const button = document.getElementById(`${product}-btn`);

    if (isChecked) {
        const quantity = getQuantity(product);
        if (quantity > 0) {
            confirmedQuantities[product] = quantity;
            button.innerText = 'Conformed'; // Change button text to 'Conformed'
            button.style.color="red";
        }
    }
    clearSubtotal(); 
}

// Function to update the subtotal and total
function updateDisplay() {
    const deliveryCharge = 20;
    document.querySelector('.subtotal').innerText = subtotal.toFixed(2);
    document.querySelector('.total').innerText = (subtotal + deliveryCharge).toFixed(2);
}

