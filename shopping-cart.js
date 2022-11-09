const removeCartItemButton = document.getElementsByClassName('btn-danger')
for (let i = 0; i < removeCartItemButton.length; i++) {
  let button = removeCartItemButton[i];
  button.addEventListener('click', function(event) {
    let buttonClick = event.target
    buttonClick.parentElement.parentElement.remove()
  })
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-items')[0]
  let cartRows = cartItemContainer.getElementsByClassName('cart-rows')
  
  for( let i = 0; i < cartRows; i++) {
    let cartRows = cartRows[i]
    let priceElement = cartRow.getElementsByClassName('cart-price')[0]
    let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    let price = parseFloat(priceElement.innerText.replace('$', ''))
    let quantity = quantityElement.value
  }
}






// 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
