import estimator from './estimator.js'

const showAddItemButton = document.getElementById('show-add-item-button')
const addItemButton = document.getElementById('add-item')
const addItemCancelButton = document.getElementById('add-item-cancel')

function showAddItem() {
    document.getElementById('add-item-section').classList.remove('hidden')
}
function hideAddItem() {
    document.getElementById('add-item-section').classList.add('hidden')
}

function calculateTotal() {
    const orderMarkup = document.getElementById('order-markup').value
    const orderDiscount = document.getElementById('order-discount').value

    let total = 0
    const lineCosts = document.querySelectorAll('[data-line-item-cost]')
    lineCosts.forEach(lineCost => {
        console.log(lineCost.dataset.lineItemCost);
        total += parseFloat(lineCost.dataset.lineItemCost)
    })
    let totalMarkup = (orderMarkup/100) * total
    let totalMarkedUpPrice = total + totalMarkup
    let totalDiscount = (orderDiscount/100) * totalMarkedUpPrice
    let totalDiscountedPrice = totalMarkedUpPrice - totalDiscount

    // console.log(orderMarkup);
    console.log(totalPrice);
}

function addItem() {
    const itemSection = document.getElementById('item-section')
    const itemProduct = document.getElementById('item-product')
    const itemSubstrate = document.getElementById('item-substrate')
    const itemWidth = document.getElementById('item-width')
    const itemHeight = document.getElementById('item-height')
    const itemBleed = document.getElementById('item-bleed')
    const itemLaminate = document.getElementById('item-laminate')
    const itemPress= document.getElementById('item-press')

    const itemQuantity = document.getElementById('item-quantity')
    // const itemPrice = document.getElementById('item-price')

    let estimate = estimator(itemWidth.value, itemHeight.value, itemBleed.value, itemQuantity.value, itemSubstrate.value, itemLaminate.value, itemPress.value, 0, 0)

    let lineItemCount = itemSection.childElementCount 
    // itemSection.innerHTML += `<li>Item-${lineItemCount + 1} ${itemProduct.value} - Sub: ${itemSubstrate.value} - ${itemWidth.value} x ${itemHeight.value} - qty: ${itemQuantity.value} | est: $${estimate.totalCost}</li>`
    itemSection.innerHTML += `<tr data-line-item-cost="${estimate.totalCost.toFixed(2)}">
    <td>${lineItemCount + 1}</td>
    <td>${itemProduct.value}</td>
    <td>${itemSubstrate.value}</td>
    <td>${itemLaminate.value}</td>
    <td>${itemWidth.value} x ${itemHeight.value}</td>
    <td>${itemPress.value}</td>
    <td>${itemQuantity.value}</td>
    <td>$${estimate.totalCost.toFixed(2)}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
</tr>`

    itemHeight.value = ''
    itemWidth.value = ''
    itemProduct.value = ''
    itemSubstrate.value = ''
    itemQuantity.value = 0
    
    hideAddItem()
    calculateTotal()
}

showAddItemButton.addEventListener('click', () => showAddItem())
addItemButton.addEventListener('click', () => addItem())
addItemCancelButton.addEventListener('click', () => hideAddItem())

