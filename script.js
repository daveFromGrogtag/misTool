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
    const itemPrice = document.getElementById('item-price')

    let estimate = estimator(itemWidth.value, itemHeight.value, itemBleed.value, itemQuantity.value, itemSubstrate.value, itemLaminate.value, itemPress.value, 0, 0)

    let lineItemCount = itemSection.childElementCount 
    itemSection.innerHTML += `<li>Item-${lineItemCount + 1} ${itemProduct.value} - Sub: ${itemSubstrate.value} - ${itemWidth.value} x ${itemHeight.value} - qty: ${itemQuantity.value} at ${itemPrice.value} | est: $${estimate.materialCost}</li>`

    itemHeight.value = ''
    itemWidth.value = ''
    itemPrice.value = ''
    itemProduct.value = ''
    itemSubstrate.value = ''
    itemQuantity.value = 0
    
    hideAddItem()
}

showAddItemButton.addEventListener('click', () => showAddItem())
addItemButton.addEventListener('click', () => addItem())
addItemCancelButton.addEventListener('click', () => hideAddItem())

